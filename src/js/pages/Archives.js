import React, { useRef, useState, useEffect } from "react";
import "../../App.css"; 
import { FaAddressCard } from "react-icons/fa";
export default class Archives extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container border">
          <div className="columns is-vcentered">
            {/* Step Indicator */}
            <div className="column is-narrow">
              <div className="tags has-addons" >
                <span className="tag is-medium is-info">STEP1</span>
              </div>
            </div>
            {/* Title */}
            <div className="column">
              <p className="title is-4"><FaAddressCard style={{ verticalAlign: '-3px' }} />お客様の情報を入力してください</p>
            </div>
          </div>

          {/* Form Card */}
          <div className="card form-card">
            <div className="card-content">
              <form>
                {/* Gender Field */}
                <div className="field">
                  <label className="label">-性別-</label>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="gender" />
                      男性
                    </label>
                    <label className="radio">
                      <input type="radio" name="gender" />
                      女性
                    </label>
                  </div>
                </div>

                {/* Birthdate Field */}
                <div className="field">
                  <label className="label">-生年月日-</label>
                  <div className="field is-grouped">
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>1991年（平成3年）</option>
                          {/* More options */}
                        </select>
                      </div>
                    </div>
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>1月</option>
                          {/* More options */}
                        </select>
                      </div>
                    </div>
                    <div className="control">
                      <div className="select">
                        <select>
                          <option>1日</option>
                          {/* More options */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
        </div>
        {/* Submit Button */}
        <div className="has-text-centered">
            <button className="button is-link">次へ進む</button>
          </div>
      </section>
    );
  }
}
