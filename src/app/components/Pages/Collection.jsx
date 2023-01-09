import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import { Tabs, Card } from 'travel_component'

const data = [
  { title: "景點", type: 1 },
  { title: "行程", type: 2 },
];

const spot = [{ 
    title: "台中火車站ˍ舊站", 
    src: "https://travel.taichung.gov.tw/content/images/attractions/27966/640x480_image636783176446274487.jpg",
    loc: "台中市中區",
    oid: 3026
  }, {
    title: "老樹根魔法木工坊", 
    src: "https://travel.taichung.gov.tw/content/images/attractions/55617/640x480_attractions-image-xzvqx-etie6pyr-evyznqw.png",
    loc: "台中市南區",
    oid: 3007
  }, {
    title: "宮原眼科", 
    src: "https://travel.taichung.gov.tw/content/images/attractions/50377/640x480_image637711220563322498.jpg",
    loc: "台中市中區",
    oid: 3161
  }
];

const trip = [
  { 
    title: "熱氣球之旅", 
    src: "https://cdn2.ettoday.net/images/4995/d4995352.jpg",
    people: 8,
    des: "Aug 8 - Aug 10"
  },
  { 
    title: "台南喝到掛", 
    src: "https://media.gq.com.tw/photos/5dbc268ecfb8d000081c005b/master/pass/2019071953952917.jpg",
    people: 4,
    des: "Dec 8 - Dec 10"
  },
];

let Item = ({ select }) => {
  if (select === 1) {
    return (
      <div className="collection-tab-content">
        {
          spot.map((s, i) => (
            <div key={i} style={{ margin: "20px" }}>
              <Link
                to={{ pathname: "/spot/detail/" + s.oid }}
                target="_blank"
                className="main-detail-link"
              >
                <Card width={240} height={220} title={s.title} src={s.src} loc={s.loc} />
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
  if (select === 2) { 
    return (
      <div className="collection-tab-content">
        {
          trip.map((t, i) => (
            <div key={i} style={{ margin: "20px" }}>
              <Card mode="trip" width={240} height={220} title={t.title} src={t.src} people={t.people} des={t.des} />
            </div>
          ))
        }
      </div>
    )
  }
};

export default class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      select: 1,
    }
  }
	render() {
    const { select } = this.state
    console.log(select)
		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
        <div className="collection-layout">
          <div className="collection-title">我的收藏</div>
          <div className="collection-content">
            <Tabs data={data} tab={(data) => data.title} setCurrent={(data) => this.setState({ select: data.type })} 
              tabPosCenter={false} border={true}
            > 
              <Item select={select} />
            </Tabs>
          </div>
          
        </div>
			</div>
		)
	}
}
