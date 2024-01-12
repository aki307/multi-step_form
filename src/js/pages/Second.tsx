import React, { useState, useContext, useEffect } from "react";
import "../../App.css";
import { FaChalkboardTeacher, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { InsuranceContext } from '../context/InsuranceContext';


export default function Second() {
  const insuranceContext = useContext(InsuranceContext);
  if (!insuranceContext) {
    throw new Error('InsuranceContext not provided');
  }
  const [showHospitalQuestion, setShowHospitalQuestion] = useState(false);
  const [showSurgeryQuestion, setShowSurgeryQuestion] = useState(false);

  const handleInsuranceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowHospitalQuestion(true);
    insuranceContext.setJoinAnswer(event.target.value === 'yes');
  };

  const handleHospitalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowSurgeryQuestion(true);
    insuranceContext.setHospitalizationAnswer(event.target.value === 'yes');
  };

  const handleSurgicalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    insuranceContext.setSurgicalAnswer(event.target.value === 'yes');
  };


  const allQuestionsAnswered =
    insuranceContext.state.joinAnswer !== null &&
    insuranceContext.state.hospitalizationAnswer !== null &&
    insuranceContext.state.surgicalAnswer !== null;

  useEffect(() => {
    console.log('Join answer:', insuranceContext.state.joinAnswer);
    console.log('Hospitalization answer:', insuranceContext.state.hospitalizationAnswer);
    console.log('Surgical answer:', insuranceContext.state.surgicalAnswer);
  });
  return (
    <section className="section">
      <div className="container border">
        <div className="columns is-vcentered">
          {/* Step2 */}
          <div className="column is-narrow">
            <div className="tags has-addons" >
              <span className="tag is-medium is-info">STEP2</span>
            </div>
          </div>
          {/* タイトル */}
          <div className="column">
            <p className="title is-4"><FaChalkboardTeacher style={{ verticalAlign: '-3px' }} />以下にお答えください</p>
          </div>
        </div>

        {/* フォームのカード */}
        <div className="card form-card">
          <div className="card-content">
            <form>
              {/* 1問目*/}
              <div className="field">
                <label className="label">現在、生命保険に加入されていますか？</label>
                <div className="control">
                  <label className="radio">
                    <input type="radio" name="join" value="yes" onChange={handleInsuranceChange} />
                    はい
                  </label>
                  <label className="radio">
                    <input type="radio" name="join" value="no" onChange={handleInsuranceChange} />
                    いいえ
                  </label>
                </div>
              </div>
              {/* 2問目*/}
              {showHospitalQuestion && (
                <div className="field">
                  <label className="label">現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</label>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="hospitalization" value="yes" onChange={handleHospitalChange} />
                      はい
                    </label>
                    <label className="radio">
                      <input type="radio" name="hospitalization" value="no" onChange={handleHospitalChange} />
                      いいえ
                    </label>
                  </div>
                </div>
              )}
              {/* 3問目*/}
              {showSurgeryQuestion && (
                <div className="field">
                  <label className="label">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</label>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="surgical" value="yes" onChange={handleSurgicalChange} />
                      はい
                    </label>
                    <label className="radio">
                      <input type="radio" name="surgical" value="no" onChange={handleSurgicalChange} />
                      いいえ
                    </label>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

      </div>
      {/* 元に戻る/次に進む　ボタン */}
      <div className="double-button">
        <Link to="/first"><button className="button is-link"><FaChevronLeft style={{ verticalAlign: '-3px' }} />　前へ戻る</button></Link>
        <Link to="/third"><button className="button is-link" disabled={!allQuestionsAnswered}>次へ進む　<FaChevronRight style={{ verticalAlign: '-3px' }} /></button></Link>
      </div>
    </section>
  );
}

