import { useState } from "react";
import "./App.css";
import { FaShoppingCart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import {FaRecycle} from "react-icons/fa"
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="head">
        <div className="cart">
          <FaShoppingCart />
        </div>

        <div className="count">0</div>
        <div className="item">Items</div>
      </div>

      <div className="buttons">
        <div className="reset">
          <HiRefresh />
        </div>

        <div className="recycle">
          <FaRecycle />
        </div>
      </div>

      <div className="list-items">
        <div className="list-item">
          <div className="items-1">Zero</div>
          <div className="items-2">
            <AiFillPlusCircle />
          </div>
          <div className="items-3">
            <AiFillMinusCircle />
          </div>
          <div className="items">
            <RiDeleteBinLine />
          </div>
        </div>
        <div className="list-item">
          <div className="items-1">Zero</div>
          <div className="items-2">
            <AiFillPlusCircle />
          </div>
          <div className="items-3">
            <AiFillMinusCircle />
          </div>
          <div className="items">
            <RiDeleteBinLine />
          </div>
        </div>
        <div className="list-item">
          <div className="items-1">Zero</div>
          <div className="items-2">
            <AiFillPlusCircle />
          </div>
          <div className="items-3">
            <AiFillMinusCircle />
          </div>
          <div className="items">
            <RiDeleteBinLine />
          </div>
        </div>
        <div className="list-item">
          <div className="items-1">Zero</div>
          <div className="items-2">
            <AiFillPlusCircle />
          </div>
          <div className="items-3">
            <AiFillMinusCircle />
          </div>
          <div className="items">
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
