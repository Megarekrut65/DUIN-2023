const convert = {
    0:{value:"Absent", color:"tomato"},
    1:{value:"Present", color:"green"},
    default:1
};

export const getMark = (count)=>{
    if(count in convert) return convert[count].value;

    return convert[convert.default].value;
};


export const getColor = (count)=>{
    if(count in convert) return convert[count].color;

    return convert[convert.default].color;
};