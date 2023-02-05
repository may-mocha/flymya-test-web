import React, {useState} from "react";
import Media from "react-media";
import {FcNext, FcPrevious} from 'react-icons/fc'
import Grid from '@mui/material/Grid';

import { Text,Buttom,Card,ContainerCom,SliderCom, Input, TabCom } from "../../component";
import { StyledHome } from "../../theme/custom/home";
import Icon from '../../asset/image'


export const Home = () => {

  const [activeCategory,setActiveCategory] = useState({
    id: 1
  })

  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow: true,
      nextArrow: <FcNext color='#29abe2'/>,
      prevArrow: <FcPrevious color='#29abe2'/>,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  }

  const slider_data = [
  Icon.Banner1,
  Icon.Banner2,
  Icon.Banner3,
  Icon.Banner2
  ]

  const category_data =[
  {
    id: 1,
    icon: Icon.Plane1,
    name: 'Flights',
  },
  {
    id: 2,
    icon: Icon.Building,
    name: 'Hotels',
  },
  { 
    id: 3,
    icon: Icon.Car,
    name: 'Buses',
  },
  {
    id: 4,
    icon: Icon.Car2,
    name: 'Cars',
  },
  {
    id: 5,
    icon: Icon.Ballon2,
    name: 'Balloons',
    tag: 'New!'
  },
  ]

  const tab_label = [
    'One Way',
    'Round Trip'
  ]

  const tab_content = [
    <ul>
            <li>
                <Text size='sm' color='gray'>From</Text>
                <Input type='text' defaultValue={'Mandalay'} onChange={()=>{}}/>
            </li>
            <li>
                <Text size='sm' color='gray'>To</Text>
                <Input type='text' defaultValue={'Tue, 16 Feb 2021'} onChange={()=>{}}/>
            </li>
            <li>
                <Text size='sm' color='gray'>Departure</Text>
                <Input type='text' defaultValue={'Wed, 17 Feb 2021'} onChange={()=>{}}/>
            </li>
            <li>
                <Text size='sm' color='gray'>Return</Text>
                <Input type='text' defaultValue={'Mon, 6 Feb 2022'} disabled onChange={()=>{}}/>
            </li>
            <li>
                <Text size='sm' color='gray'>Pax</Text>
                <Input type='text' defaultValue={'1 Adult, 0 Child, 0 Room'} onChange={()=>{}}/>
            </li>
    </ul>,
    <ul>
    <li>
        <Text size='sm' color='gray'>From</Text>
        <Input type='text' defaultValue={'Mandalay'} onChange={()=>{}}/>
    </li>
    <li>
        <Text size='sm' color='gray'>To</Text>
        <Input type='text' defaultValue={'Tue, 16 Feb 2021'} onChange={()=>{}}/>
    </li>
    <li>
        <Text size='sm' color='gray'>Departure</Text>
        <Input type='text' defaultValue={'Wed, 17 Feb 2021'} onChange={()=>{}}/>
    </li>
    <li>
        <Text size='sm' color='gray'>Return</Text>
        <Input type='text' defaultValue={'Mon, 6 Feb 2022'} onChange={()=>{}}/>
    </li>
    <li>
        <Text size='sm' color='gray'>Pax</Text>
        <Input type='text' defaultValue={'1 Adult, 0 Child, 0 Room'} onChange={()=>{}}/>
    </li>
    </ul>
  ]

  return (
    <StyledHome>
      <ContainerCom>
        <Text as='h1' size='xxxxl' weight='lg' color='primary' textAlign='center'>Travel is easy with us</Text>
        {
          slider_data &&
          <section className="slider-sec">
            <SliderCom settings={settings}>
                {
                  slider_data?.map((slide,key)=>(
                    <img src={slide} alt='slide-img' key={key}/>
                  ))
                }
            </SliderCom>
          </section>
        }
        {
          category_data &&
          <section className="category-sec">
            <div className="category-con">
              {
                category_data?.map((item,key)=>(
                  <div className={`category ${activeCategory?.id===item?.id? 'active':''}`} key={key} onClick={()=>setActiveCategory({id:item?.id})}>
                    <img src={item?.icon} alt='icon'/>
                    <Text>{item?.name}</Text>
                    {
                      item?.tag &&
                      <Text as='span' size='xxs' className='tag' color='light'>{item?.tag}</Text>
                    }
                  </div>
                ))
              }
            </div>
          </section>
        }
      </ContainerCom>
      <section className="search-sec">
        <ContainerCom background='transparent'>
          <Media query={{minWidth: 992}}>
            {(matches)=>
            matches?
              <div className="wrapper">
                <div className='select-con'>
                  <div className="type">
                    <Input type='radio' label='Domestic' defaultChecked />
                    <Input type='radio' label='International' tag="New!"/>
                  </div>
                  <div className="citizen">
                    <Text size='sm' color='gray2'>Myanmar Citizens</Text>
                    <Input type='radio' label='Yes' defaultChecked />
                    <Input type='radio' label='No'/>
                  </div>
                  <div className="trip-type">
                    <Text size='sm' color='gray2'>Trip Type</Text>
                    <Input input_as='select'>
                      <option>One Way</option>
                      <option>Round Trip</option>
                    </Input>
                  </div>
                  <div className="passenger">
                    <Text size='sm' color='gray2'>Passenger</Text>
                    <Input input_as='select'>
                      <option>1 Adult</option>
                      <option>1 Adult</option>
                    </Input>
                  </div>
                </div>
                <div className='search-con'>
                  <Grid container alignItems="center">
                    <Grid item xs={3} >
                      <div className="from">
                        <img src={Icon.Plane3}/>
                        <Input type='text' placeholder='From' onChange={()=>{}}/>
                      </div>
                    </Grid>
                    <Grid item xs={4} >
                      <div className="to">
                        <img src={Icon.Plane4}/>
                        <Input type='text' placeholder='To' onChange={()=>{}}/>
                      </div>
                    </Grid>
                    <Grid item xs={5} >
                      <div className="dept-date">
                        <div className="wrap">
                        <img src={Icon.Calendar} alt='calendar'/>
                        <Text size='sm' color='gray2' style={{display:'flex', flexDirection: 'column'}}>Deparature Date<Input type='text' value='Sat, 11 Jun 2022'/></Text>
                        </div>
                        <Buttom bgColor='warn' color='light' text='Search' borderRadius='sm'/>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              :
              <div className="wrapper">
              <div className='select-con'>
                  <div className="citizen">
                    <Text size='sm'>Myanmar Citizens</Text>
                    <div className="wrap">
                      <Input type='radio' label='Yes' defaultChecked />
                      <Input type='radio' label='No'/>
                    </div>
                  </div>
              </div>
              <div className="search-con">
                <TabCom label={tab_label} content={tab_content}/>
              </div>
              <Buttom bgColor='warn' color='light' text='Search' borderRadius='xs' textAlign='center' className='search-btn'/>
              </div>
          }
          </Media>
        </ContainerCom>
      </section>
    </StyledHome>
  )
}