/* eslint-disable react/prop-types */
import rating_1 from "/src/assets/1 star.png"
import rating_2 from "/src/assets/2Star.png"
import rating_3 from "/src/assets/3star.png"
import rating_4 from "/src/assets/4star.png"
import rating_5 from "/src/assets/5star.png"
const Ratting = ({Ratting}) => {

    return (
        <div>
            <img className="w-36" src={Ratting==1? rating_1 
            : Ratting ==2? rating_2 :
            Ratting == 3? rating_3:
            Ratting == 4? rating_4 :
            Ratting == 5? rating_5:
            null
            } alt="" />
        </div>
    );
};

export default Ratting;