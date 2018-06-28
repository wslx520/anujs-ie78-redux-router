import React from 'react';

let getValue = (value) => {
    value = parseFloat(value);
    return value ? '￥'+value : "免费";
}

let Money = (prop) => (
    <span className={prop.value == 0 ? "_Color_free" : ""}>{getValue(prop.value)}</span>
)

export default Money;