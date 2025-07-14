import { Link } from "react-router-dom";

function Dashboard() {
    return (
    <div className="dashboard">
        <h1 className='header'>Our collections</h1>          
                <div>
        <div className="items">
            <div className="item-back">
                <img src="img1.jpg" alt="A story whispered in silk and woven in soul." className="img"/>
            </div>
            <div className="item-back">
                <img src="img3.jpg" alt="A scarf, a crown, a celebration. Woven with soul, worn with joy." className="img"/>
            </div>
            <div className="item-back">
                <img src="img4.jpg" alt="She wears tradition like sunshine—bright, bold, and beautifully her own." className="img"/>
            </div>
            <div className="item-back1">
                <img src="img2.jpg" alt="“To wrap oneself in culture is to walk as history’s daughter.” Pride. Power." className="img1"/>
            </div>
            <div className="item-back">
                <img src="img7.jpg" alt="Gold is the new neutral. Pair it, wear it, own it." className="img"/>
            </div>
            <div className="puzzler">
            <img src="imgA.jpg" alt="A" className="img-puzzle"/>
            <img src="imgB.jpg" alt="B" className="img-puzzle"/>
            <img src="imgC.jpg" alt="C" className="img-puzzle"/> 
            <img src="imgD.jpg" alt="D" className="img-puzzle"/>
            <img src="imgE.jpg" alt="E" className="img-puzzle"/>
            <img src="imgF.jpg" alt="F" className="img-puzzle"/>
            <img src="imgG.jpg" alt="G" className="img-puzzle"/>
            <img src="imgH.jpg" alt="H" className="img-puzzle"/>
            <img src="imgI.jpg" alt="I" className="img-puzzle"/>
            <img src="imgJ.jpg" alt="J" className="img-puzzle"/>
            <img src="imgK.jpg" alt="K" className="img-puzzle"/>
            <img src="imgL.jpg" alt="L" className="img-puzzle"/>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Dashboard;
