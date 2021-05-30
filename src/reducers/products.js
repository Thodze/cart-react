let initialState = [
    {
        id : 1,
        name : 'ip5',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        des : 'demo',
        price : 1000,
        inventory : 10,
        rating : 3
    },
    {
        id : 2,
        name : 'ip6',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        des : 'demo',
        price : 1300,
        inventory : 50,
        rating : 4
    },
    {
        id : 3,
        name : 'ip7',
        image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        des : 'demo',
        price : 2000,
        inventory : 100,
        rating : 5
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default :
            return [...state];
    }
};

export default products;