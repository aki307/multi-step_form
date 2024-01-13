import React, { useState, useContext, useEffect } from "react";
import "../../App.css";
import { FaChalkboardTeacher, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenderContext from '../context/GenderContext';
import BirthdateContext, { Birthdate } from '../context/BirthdateContext';
import { InsuranceContext } from '../context/InsuranceContext';

export default function Confirmation() {
  const genderContext = useContext(GenderContext);
  const birthdateContext = useContext(BirthdateContext);
  const insuranceContext = useContext(InsuranceContext);

  if (!birthdateContext || !genderContext || !insuranceContext) {
    return <div>データがありません。</div>;
  }
  const { gender } = genderContext;
  const { birthdate } = birthdateContext;
  const { joinAnswer, hospitalizationAnswer, surgicalAnswer, consultationContent } = insuranceContext.state;

  const birthdateDisplay = (birthdate: Birthdate) => {
    if (birthdate && typeof birthdate.year === 'number' && typeof birthdate.month === 'number' && typeof birthdate.day === 'number') {
      return `${birthdate.year}年${birthdate.month}月${birthdate.day}日`;
    }
    return '生年月日が取得できません';
  };
  const joinAnswerText = joinAnswer ? 'はい' : 'いいえ';
  const hospitalizationAnswerText = hospitalizationAnswer ? 'はい' : 'いいえ';
  const surgicalAnswerText = surgicalAnswer ? 'はい' : 'いいえ';

  return (
    <section className="section">
      <div className="container border">
        <div className="columns is-vcentered">
          {/*  Confirmation */}
          <div className="column is-narrow">
            <div className="tags has-addons" >
              <span className="tag is-medium is-info">Confirmation</span>
            </div>
          </div>
          {/* タイトル */}
          <div className="column">
            <p className="title is-4"><FaChalkboardTeacher style={{ verticalAlign: '-3px' }} />以下の内容をご確認ください</p>
          </div>
        </div>

        {/* フォームのカード */}
        <div className="card form-card">
          <div className="card-content">
            {/* 性別*/}
            <div className="field">
              <label className="label">-性別-</label>
              <div className="control">
                {gender}
              </div>
            </div>
            {/* 生年月日*/}
            <div className="field">
              <label className="label">-生年月日-</label>
              <div className="control">
                {birthdateDisplay(birthdate)}
              </div>
            </div>

            {/* 生命保険加入の有無*/}
            <div className="field">
              <label className="label">-現在、生命保険に加入されていますか？-</label>
              <div className="control">
                {joinAnswerText}
              </div>
            </div>

            {/* 入院・手術の有無*/}
            <div className="field">
              <label className="label">-現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</label>
              <div className="control">
                {hospitalizationAnswerText}
              </div>
            </div>

            {/* 過去の入院・手術の有無*/}
            <div className="field">
              <label className="label">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</label>
              <div className="control">
                {surgicalAnswerText}
              </div>
            </div>

            {/* ご相談内容*/}
            <div className="field">
              <label className="label">-ご相談内容-</label>
              <div className="control">
                {consultationContent}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 元に戻る/次に進む　ボタン */}
      <div className="double-button">
        <Link to="/third"><button className="button is-link"><FaChevronLeft style={{ verticalAlign: '-3px' }} />　前へ戻る</button></Link>
        <Link to="#"><button className="button is-link">次へ進む　<FaChevronRight style={{ verticalAlign: '-3px' }} /></button></Link>
      </div>
    </section>
  );
}

