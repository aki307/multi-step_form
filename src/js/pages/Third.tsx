import React from "react";
import "../../App.css";
import { FaRegFileAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Third extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container border">
          <div className="columns is-vcentered">
            {/* Step3 */}
            <div className="column is-narrow">
              <div className="tags has-addons" >
                <span className="tag is-medium is-info">STEP3</span>
              </div>
            </div>
            
            <div className="column">
              <p className="title is-4"><FaRegFileAlt style={{ verticalAlign: '-3px' }} />ご相談内容をご記入ください</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="card form-card">
            <div className="card-content">
              <form>
                {/* 相談内容 */}
                <div className="field">
                  <label className="label textarea-label">-ご相談内容</label>
                  <textarea className="textarea" rows={20}></textarea>
                </div>
              </form>
            </div>
          </div>

        </div>
        {/* 元に戻る/次に進む　ボタン */}
        <div className="double-button">
          <Link to="/second"><button className="button is-link"><FaChevronLeft style={{ verticalAlign: '-3px' }} />　前へ戻る</button></Link>
          <button className="button is-link">次へ進む　<FaChevronRight style={{ verticalAlign: '-3px' }} /></button>
        </div>
      </section>
    );
  }
}
