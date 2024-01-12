import React, { useContext, useState } from "react";
import "../../App.css";
import { FaRegFileAlt, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InsuranceContext } from '../context/InsuranceContext';

export default function Third() {
  
    const insuranceContext = useContext(InsuranceContext);
  if (!insuranceContext) {
    throw new Error('InsuranceContext not provided');
  }

  const [consultation, setConsultation] = useState(insuranceContext.state.consultationContent);

  const handleConsultationChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConsultation(event.target.value);
    insuranceContext.setConsultationContent(event.target.value);
  };

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
                  <textarea className="textarea" rows={20} value={consultation} onChange={handleConsultationChange}></textarea>
                </div>
              </form>
            </div>
          </div>

        </div>
        {/* 元に戻る/次に進む　ボタン */}
        <div className="double-button">
          <Link to="/second"><button className="button is-link"><FaChevronLeft style={{ verticalAlign: '-3px' }} />　前へ戻る</button></Link>
          <Link to="/confirmation"> <button className="button is-link">次へ進む　<FaChevronRight style={{ verticalAlign: '-3px' }} /></button></Link>
        </div>
      </section>
    );
  }

