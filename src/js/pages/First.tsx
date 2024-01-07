import React, { Component, ChangeEvent } from "react";
import "../../App.css";
import { FaAddressCard, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BirthdateInput from '../components/BirthdateInput';

import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { setGender } from '../actions';


interface IState {
  gender: string;
}



class First extends Component<{}, IState> {
  state: IState = {
    gender: '',
  };

  handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    const { gender } = this.state;
    const isGenderSelected = gender !== '';
    
    console.log(this.props);

    return (
      <section className="section">
        <div className="container border">
          <div className="columns is-vcentered">
            {/* Step1 */}
            <div className="column is-narrow">
              <div className="tags has-addons">
                <span className="tag is-medium is-info">STEP1</span>
              </div>
            </div>

            <div className="column">
              <p className="title is-4"><FaAddressCard style={{ verticalAlign: '-3px' }} />お客様の情報を入力してください</p>
            </div>
          </div>

          {/* フォームカード */}
          <div className="card form-card">
            <div className="card-content">
              <form>
                {/* 性別選択 */}
                <div className="field">
                  <label className="label">-性別-</label>
                  <div className="control">
                    <label className="radio">
                      <input type="radio" name="gender" value="男性" onChange={this.handleGenderChange} />
                      男性
                    </label>
                    <label className="radio">
                      <input type="radio" name="gender" value="女性" onChange={this.handleGenderChange} />
                      女性
                    </label>
                  </div>
                </div>

                {/* 生年月日選択 */}
                <BirthdateInput />
              </form>
            </div>
          </div>
        </div>

        {/* 次へ進む */}
        <div className="has-text-centered">
          <Link to={isGenderSelected ? "/second" : "#"}>
            <button className="button is-link" disabled={!isGenderSelected}>次へ進む　<FaChevronRight style={{ verticalAlign: '-3px' }} /></button>
          </Link>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state: RootState) => ({
  selectedGender: state.gender.gender
});

const mapDispatchToProps = {
  setGender
};

export default connect(mapStateToProps, mapDispatchToProps)(First);
// export default First;
