import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../containers/Header'
import { Tabs, Card } from 'travel_component'

const data = [
  { title: "景點", type: 1 },
  { title: "行程", type: 2 },
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

let Item = ({ select, collectionList }) => {
  if (select === 1) {
    return (
      <div className="collection-tab-content">
        {
          collectionList.map((s, i) => (
            <div key={i} style={{ margin: "20px" }}>
              <Link
                to={{ pathname: "/spot/detail/" + s.oid }}
                target="_blank"
                className="main-detail-link"
              >
                <Card width={240} height={220} title={s.spotName} src={s.pictureUrl} loc={s.city + s.town} />
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

  componentDidMount() {
    const { GetCollectionList } = this.props
    GetCollectionList()
  }
  
	render() {
    const { select } = this.state
    const { collectionList } = this.props
		return (
			<div style={{ marginBottom: "80px" }}>
				<Header />
        <div className="collection-layout">
          <div className="collection-title">我的收藏</div>
          <div className="collection-content">
            <Tabs data={data} tab={(data) => data.title} setCurrent={(data) => this.setState({ select: data.type })} 
              tabPosCenter={false} border={true}
            > 
              <Item select={select} collectionList={collectionList.items} />
            </Tabs>
          </div>
        </div>
			</div>
		)
	}
}
