import React, { Component } from 'react'
import searchfield_bg from '../../img/searchfield_bg.jpg'
import { SearchBox } from 'travel_component'

export default class SearchField extends Component {
  render() {
    const { GetAutoCityList, autoCityList } = this.props
    return (
      <div className="searchfield-layout">
        <img src={searchfield_bg} alt="search_bg" className="searchfield-bd" />
        <div className="searchfield-bar-pos">
          <div className="searchfield-slogan">Get Ready for TRAVEL</div>
          <div style={{ height: "40vh" }}>
            <SearchBox fontSize={18} suggestion={autoCityList.items} option={(d) => d.result} link={(d) => "/spot/" + d.result} width={1000} height={45}
              hintText="要去哪？" searchFunc={(text) => GetAutoCityList(text)}
            />
          </div>
        </div>
      </div>
    )
  }
}