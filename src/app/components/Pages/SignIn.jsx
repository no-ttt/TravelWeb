import React, { Component } from 'react'
import Header from '../../containers/Header'
import loginbg1 from '../../img/loginbg_1.jpg'
import loginbg2 from '../../img/loginbg_2.jpg'
import service1 from '../../img/service_1.jpg'
import service2 from '../../img/service_2.jpg'
import service3 from '../../img/service_3.jpg'
import Footer from '../HomePage/Footer'

const serviceIntro = [
	{ title: "PLAN", content: "輸入旅程起點和終點，系統自動幫你撈出路線周遭的收藏景點，方便做行程上的規劃。", img: service1 },
	{ title: "ENJOY", content: "旅遊的過程中，可以在系統內的空白地圖上紀錄足跡和心情。", img: service2 },
	{ title: "SHARE", content: "旅程結束後，系統根據規劃的行程和旅遊過程中建立的足跡地圖，自動化整理遊記大綱。", img: service3 },
];

export default class SignIn extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="signIn-block-1">
					<div className="signIn-white-bg" />
					<div className="signIn-bg-1-layout">
						<div className="signIn-bg-1-slogan">
							<div className="signIn-bg-1-slogan-title">旅 · 筆記</div>
							<div className="signIn-bg-1-slogan-subtitle">讓我們為你記錄下每趟旅程的美好回憶。</div>
						</div>
						<img src={loginbg1} alt="loginbg-1" className="signIn-bg-1-img" />
					</div>
				</div>
				<div className="signIn-block-2">
					<img src={loginbg2} alt="loginbg-2" className="signIn-bg-2-img" />
					<div className="signIn-green-bg">
						<div className="signIn-bg-2-slogan-title">排行程再也不是一個人的事！</div>
						<div className="signIn-bg-2-slogan-subtitle">和朋友一同在線上規劃你們的旅程吧</div>
					</div>
				</div>
				<div className="signIn-service">
					<div className="signIn-service-title">— Service —</div>
					{
						serviceIntro.map((s, i) => (
							<div key={i} className="signIn-service-func-block">
								<img src={s.img} alt={s.title} className="signIn-service-img" />
								<div>
									<div className="signIn-service-subtitle">{s.title}</div>
									<div className="signIn-service-content">{s.content}</div>
								</div>
							</div>
						))
					}
				</div>
				<Footer />
			</div>
		)
	}
}
