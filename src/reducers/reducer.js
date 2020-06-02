import mua from '../JerseyImg/MU-away.JPG';
import mut from '../JerseyImg/MU-third.JPG';
import rma from '../JerseyImg/RM-away.JPG';
import rmh from '../JerseyImg/RM-home.JPG';
import asa from '../JerseyImg/Arsenal-away.JPG';
import ash from '../JerseyImg/Arsenal-home.JPG';

const initState = {
    items:[
         {id:1, title:"Manchester United Away Jersey", Price:59.99, img:mua},
         {id:2, title:"Manchester United Third Jersey", Price:59.99, img:mut},
         {id:3, title:"Real Madrid Away Jersey", Price:69.99, img:rma},
         {id:4, title:"Real Madrid Home Jersey", Price:79.99, img:rmh},
         {id:5, title:"Arsenal Away Jersey", Price:59.99, img:asa},
         {id:6, title:"Arsenal Home Jersey", Price:69.99, img:ash}
    ],
    addItem: [],
    total: 0
}

const reducer = (state = initState, action) => {
    return state
}

export default reducer;