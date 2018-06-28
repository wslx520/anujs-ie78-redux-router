/**
 *
 * title: pureRenderDecorator
 *
 * description: 组件多次刷新工具类
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import _ from 'lodash';

/**
 * 判断两个对象是否相等
 *
 * @param objA 原对象
 * @param objB 比较的对象
 * @returns {boolean} true | false
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  // const keysB = Object.keys(objB);

  // 个数不相等也可以
  /* if (keysA.length !== keysB.length) {
        return false;
    } */

  const bHasOwnProperty = hasOwnProperty.bind(objB);
  // debugger;
  for (let i = 0; i < keysA.length; i += 1) {
    const keyA = keysA[i];

    // special diff with Array or Object
    if (objA[keyA] !== objB[keyA]) {
      if (_.isArray(objA[keyA])) {
        if (!_.isArray(objB[keyA]) || objA[keyA].length !== objB[keyA].length) {
          return false;
        } else if (!_.isEqual(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if (_.isPlainObject(objA[keyA])) {
        if (!_.isPlainObject(objB[keyA]) || !_.isEqual(objA[keyA], objB[keyA])) {
          return false;
        }
      } else if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
        return false;
      }
    }
  }

  return true;
}


function shallowCompare(instance, nextProps, nextState) {
  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
}

function shouldComponentUpdate(nextProps, nextState) {
  return shallowCompare(this, nextProps, nextState);
}
/* eslint-disable no-param-reassign */
function pureRenderDecorator(component) {
  // 覆盖了component中的shouldComponentUpdate方法
  component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return component;// Decorator不用返回,直接使用高阶组件需要return
}
/** ***
 *使用ES6 class 语法糖如下，decorator的没试过，decorator请使用上面的，不要return
 *let pureRenderDecorator = component => class {
*  constructor(props) {
*    super(props);
*    component.prototype.shouldComponentUpdate = shouldComponentUpdate;
*  }
*  render(){
*    var Component = component;//自定义组件使用时要大写
*   return (
*        <Component {...this.props}/>
*    )
*  }
*}
 ***** */
export { shallowEqual };
export default pureRenderDecorator;
