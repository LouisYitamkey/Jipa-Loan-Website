import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fixedrate from '../images/fixedrate.png';





const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
 
  slide1: {
    // backgroundColor:"#a7d2d6",
    backgroundColor:'white'


  },
  slide2: {
    // background: '#6cb7d6',
    backgroundColor:'white'
  },
  slide3: {
    backgroundColor:'white'
  },
};

const Swiper = () => (
    
  <AutoPlaySwipeableViews  interval={3000} style={{ width: '100%', height:'100%' }}>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <div className='flex justify-around md:pt-7 pt-5  shadow-2xl '>
        <div className='pt-10 md:pt-10  pb-12 md:pb-14'>
    
        <div className='flex  justify-center items-center'>
         {/* <img className='mb-4' src={Fixedrate}/> */}
     
                   <img className='w-12 mb-6 md:mb-6' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMSIgeD0iNTAiIHk9IjUxIiBmaWxsPSIjYmY3Mzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDU1IDU2LjUpIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzIiB4PSIyNyIgeT0iMzkiIGZpbGw9IiNjYzdhN2QiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMzIgNTAuNSkiPjwvcmVjdD48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMzciIHg9IjQiIHk9IjI1IiBmaWxsPSIjZDk4Mjg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDkgNDMuNSkiPjwvcmVjdD48cGF0aCBmaWxsPSIjYTY2NDY2IiBkPSJNNTcsNTF2NmEyLDIsMCwwLDEtMiwySDUwdjNINjBWNTFaIj48L3BhdGg+PHBhdGggZmlsbD0iI2IzNmI2ZCIgZD0iTTM0LDM5VjU3YTIsMiwwLDAsMS0yLDJIMjd2M0gzN1YzOVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjYmY3Mzc1IiBkPSJNMTEsMjVWNTdhMiwyLDAsMCwxLTIsMkg0djNIMTRWMjVaIj48L3BhdGg+PGNpcmNsZSBjeD0iNDkiIGN5PSIxNSIgcj0iMTMiIGZpbGw9IiM3Y2IyZjgiPjwvY2lyY2xlPjxwYXRoIGZpbGw9IiM2ZjlmZGUiIGQ9Ik01Ny4xMzMsNC44NjdBMTIuOTkyLDEyLjk5MiwwLDAsMSwzOC44NjcsMjMuMTMzLDEyLjk5NCwxMi45OTQsMCwxLDAsNTcuMTMzLDQuODY3WiI+PC9wYXRoPjxjaXJjbGUgY3g9IjUzIiBjeT0iMTgiIHI9IjIiIGZpbGw9IiNkOWUxZTYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ1IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNkOWUxZTYiPjwvY2lyY2xlPjxwYXRoIGQ9Ik02MSw1MWExLDEsMCwwLDAtMS0xSDUwYTEsMSwwLDAsMC0xLDFWNjFIMzhWMzlhMSwxLDAsMCwwLTEtMUgyN2ExLDEsMCwwLDAtMSwxVjYxSDE1VjI1YTEsMSwwLDAsMC0xLTFINGExLDEsMCwwLDAtMSwxVjYxSDF2Mkg2M1Y2MUg2MVpNMTMsNjFINVYyNmg4Wm0yMywwSDI4VjQwaDhabTIzLDBINTFWNTJoOFoiPjwvcGF0aD48cGF0aCBkPSJNOS43MjUsMTEuMzEybC0xLjQ1LDEuMzc2Yy4xODYuMiwxOC4zOSwxOS4xNDMsNDQuMSwyOC40NTZsLTIuOTE0LDEuMzkuODYxLDEuOEw1NS40MzEsNDEuOWExLDEsMCwwLDAsLjQ3MS0xLjMzM2wtMi40MzYtNS4xMDUtMS44Ljg2MSwxLjQsMi45NDFDMjcuODA5LDMwLjEyMiw5LjkwOCwxMS41LDkuNzI1LDExLjMxMloiPjwvcGF0aD48cGF0aCBkPSJNNDksMUExNCwxNCwwLDEsMCw2MywxNSwxNC4wMTUsMTQuMDE1LDAsMCwwLDQ5LDFabTAsMjZBMTIsMTIsMCwxLDEsNjEsMTUsMTIuMDEzLDEyLjAxMywwLDAsMSw0OSwyN1oiPjwvcGF0aD48cmVjdCB3aWR0aD0iMTQuMDAxIiBoZWlnaHQ9IjIiIHg9IjQxLjk5OSIgeT0iMTQiIHRyYW5zZm9ybT0icm90YXRlKC00NSA0OSAxNSkiPjwvcmVjdD48cGF0aCBkPSJNNTAuODc5LDE1Ljg3OWEzLDMsMCwxLDAsNC4yNDIsMEEzLDMsMCwwLDAsNTAuODc5LDE1Ljg3OVptMi44MjgsMi44MjhhMSwxLDAsMSwxLDAtMS40MTRBMSwxLDAsMCwxLDUzLjcwNywxOC43MDdaIj48L3BhdGg+PHBhdGggZD0iTTQ3LjEyMSwxNC4xMjFBMywzLDAsMSwwLDQ1LDE1LDMsMywwLDAsMCw0Ny4xMjEsMTQuMTIxWm0tMi44MjgtMi44MjhhMSwxLDAsMSwxLDAsMS40MTRBMSwxLDAsMCwxLDQ0LjI5MywxMS4yOTNaIj48L3BhdGg+Cjwvc3ZnPg=="/>


         <h1 className=' hidden  ml-10 md:block'> <span className='       text-black md:text-2xl font-light text-center   '> Lowest Interest  Rates </span> </h1> 
         </div>
           {/* <p> Interest Section</p> */}
        
           <h1 className='md:hidden '> <span className='  text-black  text-sm font-light text-center   '> Lowest Interest  Rates </span> </h1> 
         
          
        </div>
     
  
        <div className='pt-10 '>
       
          
       
<div className='flex justify-center items-center'>
 {/* <img className='mb-4' src={Fixedrate}/> */}
 <img className='w-14 md:w-12 mb-4 md:mb-5' src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-hidden-islam-and-ramadan-flatart-icons-solid-flatarticons.png"/>
          <h1 className=' hidden ml-10 md:block'> <span className='  text-black font-light md:text-2xl text-center   '> No Hidden Fees </span> </h1> 

 </div>
   {/* <p> Interest Section</p> */}
   <h1> <span className=' md:hidden   text-black  text-sm font-light text-center   '> No Hidden Fees</span> </h1> 



</div>
        <div className='pt-10'>
           
         <div className='flex justify-center items-center'>
         <img className='mb-4 md:mb-5 w-14 md:w-12' src={Fixedrate}/>
                  <h1 className=' hidden ml-10 md:block'> <span className='   text-2xl   text-black font-light text-center   '> No Collateral </span> </h1> 

         </div>
         <span className='text-sm md:hidden    text-black font-light text-center'> No Collateral </span>
        </div>

      </div>
    </div>


    
     <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <div className='flex justify-around md:pt-7 pt-5 shadow-2xl '>
        <div className='pt-10 md:pt-10  pb-12 md:pb-14'>
    

        <div className='flex  justify-center items-center'>
         {/* <img className='mb-4' src={Fixedrate}/> */}
  
                   <img className='w-12  mb-6' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMSIgeD0iNTAiIHk9IjUxIiBmaWxsPSIjYmY3Mzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDU1IDU2LjUpIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjIzIiB4PSIyNyIgeT0iMzkiIGZpbGw9IiNjYzdhN2QiIHRyYW5zZm9ybT0icm90YXRlKC0xODAgMzIgNTAuNSkiPjwvcmVjdD48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMzciIHg9IjQiIHk9IjI1IiBmaWxsPSIjZDk4Mjg1IiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDkgNDMuNSkiPjwvcmVjdD48cGF0aCBmaWxsPSIjYTY2NDY2IiBkPSJNNTcsNTF2NmEyLDIsMCwwLDEtMiwySDUwdjNINjBWNTFaIj48L3BhdGg+PHBhdGggZmlsbD0iI2IzNmI2ZCIgZD0iTTM0LDM5VjU3YTIsMiwwLDAsMS0yLDJIMjd2M0gzN1YzOVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjYmY3Mzc1IiBkPSJNMTEsMjVWNTdhMiwyLDAsMCwxLTIsMkg0djNIMTRWMjVaIj48L3BhdGg+PGNpcmNsZSBjeD0iNDkiIGN5PSIxNSIgcj0iMTMiIGZpbGw9IiM3Y2IyZjgiPjwvY2lyY2xlPjxwYXRoIGZpbGw9IiM2ZjlmZGUiIGQ9Ik01Ny4xMzMsNC44NjdBMTIuOTkyLDEyLjk5MiwwLDAsMSwzOC44NjcsMjMuMTMzLDEyLjk5NCwxMi45OTQsMCwxLDAsNTcuMTMzLDQuODY3WiI+PC9wYXRoPjxjaXJjbGUgY3g9IjUzIiBjeT0iMTgiIHI9IjIiIGZpbGw9IiNkOWUxZTYiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjQ1IiBjeT0iMTIiIHI9IjIiIGZpbGw9IiNkOWUxZTYiPjwvY2lyY2xlPjxwYXRoIGQ9Ik02MSw1MWExLDEsMCwwLDAtMS0xSDUwYTEsMSwwLDAsMC0xLDFWNjFIMzhWMzlhMSwxLDAsMCwwLTEtMUgyN2ExLDEsMCwwLDAtMSwxVjYxSDE1VjI1YTEsMSwwLDAsMC0xLTFINGExLDEsMCwwLDAtMSwxVjYxSDF2Mkg2M1Y2MUg2MVpNMTMsNjFINVYyNmg4Wm0yMywwSDI4VjQwaDhabTIzLDBINTFWNTJoOFoiPjwvcGF0aD48cGF0aCBkPSJNOS43MjUsMTEuMzEybC0xLjQ1LDEuMzc2Yy4xODYuMiwxOC4zOSwxOS4xNDMsNDQuMSwyOC40NTZsLTIuOTE0LDEuMzkuODYxLDEuOEw1NS40MzEsNDEuOWExLDEsMCwwLDAsLjQ3MS0xLjMzM2wtMi40MzYtNS4xMDUtMS44Ljg2MSwxLjQsMi45NDFDMjcuODA5LDMwLjEyMiw5LjkwOCwxMS41LDkuNzI1LDExLjMxMloiPjwvcGF0aD48cGF0aCBkPSJNNDksMUExNCwxNCwwLDEsMCw2MywxNSwxNC4wMTUsMTQuMDE1LDAsMCwwLDQ5LDFabTAsMjZBMTIsMTIsMCwxLDEsNjEsMTUsMTIuMDEzLDEyLjAxMywwLDAsMSw0OSwyN1oiPjwvcGF0aD48cmVjdCB3aWR0aD0iMTQuMDAxIiBoZWlnaHQ9IjIiIHg9IjQxLjk5OSIgeT0iMTQiIHRyYW5zZm9ybT0icm90YXRlKC00NSA0OSAxNSkiPjwvcmVjdD48cGF0aCBkPSJNNTAuODc5LDE1Ljg3OWEzLDMsMCwxLDAsNC4yNDIsMEEzLDMsMCwwLDAsNTAuODc5LDE1Ljg3OVptMi44MjgsMi44MjhhMSwxLDAsMSwxLDAtMS40MTRBMSwxLDAsMCwxLDUzLjcwNywxOC43MDdaIj48L3BhdGg+PHBhdGggZD0iTTQ3LjEyMSwxNC4xMjFBMywzLDAsMSwwLDQ1LDE1LDMsMywwLDAsMCw0Ny4xMjEsMTQuMTIxWm0tMi44MjgtMi44MjhhMSwxLDAsMSwxLDAsMS40MTRBMSwxLDAsMCwxLDQ0LjI5MywxMS4yOTNaIj48L3BhdGg+Cjwvc3ZnPg=="/>

       

         <h1 className=' hidden ml-10 md:block'> <span className='  text-2xl   text-black font-light text-center   '> Instant Application </span> </h1> 
         </div>
           {/* <p> Interest Section</p> */}
        
           <h1 className='md:hidden '> <span className=' text-sm md:hidden    text-black font-light text-center  '> Instant Application </span> </h1> 
         
          
        </div>
     
  
        <div className='pt-10 '>
       
          
       
<div className='flex justify-center items-center'>
 {/* <img className='mb-4' src={Fixedrate}/> */}
 <img className='w-14 md:w-12 mb-4 md:mb-5' src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-hidden-islam-and-ramadan-flatart-icons-solid-flatarticons.png"/>
          <h1 className=' hidden ml-10 md:block'> <span className='  text-2xl   text-black font-light text-center  '>  Instant Review </span> </h1> 

 </div>
   {/* <p> Interest Section</p> */}
   <h1> <span className=' md:hidden   text-sm     text-black font-light text-center    '> Instant Review </span> </h1> 



</div>
        <div className='pt-10'>
           
         <div className='flex justify-center items-center'>
         <img className='mb-4 md:mb-5 w-14 md:w-12' src={Fixedrate}/>
                  <h1 className=' hidden ml-10 md:block'> <span className='  text-2xl  text-black font-light text-center    '> Instant Cash </span> </h1> 

         </div>
         <span className=' md:hidden     text-sm     text-black font-light text-center    '> Instant Cash </span>
        </div>

      </div>
    </div>



    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <div className='flex justify-around md:pt-7 pt-5 shadow-2xl '>
        <div className='pt-10 pb-12 md:pb-14'>

        <div className='flex justify-center items-center'>
         {/* <img className='mb-4' src={Fixedrate}/> */}
  
         <svg className='w-12 mb-2 ' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="64" height="64"
viewBox="0 0 256 256">
<path fill="#A54AF4" d="M55.123,184.696c0,5.523,4.477,10,10,10h167.64c5.523,0,10-4.477,10-10V72.928H55.123V184.696z"></path><path fill="#B171F4" d="M61.123,132.928c-1.104,0-2-0.896-2-2v-44c0-1.104,0.896-2,2-2s2,0.896,2,2v44 C63.123,132.033,62.228,132.928,61.123,132.928z M61.123,80.928c-1.104,0-2-0.896-2-2V78.7c0-1.104,0.896-2,2-2s2,0.896,2,2 v0.229C63.123,80.033,62.228,80.928,61.123,80.928z"></path><path fill="#893ADD" d="M232.763,72.928v101.768c0,5.523-4.477,10-10,10H55.123c0,5.523,4.477,10,10,10h167.64 c5.523,0,10-4.477,10-10V72.928H232.763z"></path><path fill="#6C2BC1" d="M237.763,72.928v106.768c0,5.523-4.477,10-10,10H60.123c-1.466,0-2.855-0.323-4.11-0.89 c1.569,3.471,5.053,5.89,9.11,5.89h167.64c5.523,0,10-4.477,10-10V72.928H237.763z"></path><path fill="#F1F2F2" d="M69.748,170.071c0,5.523,4.477,10,10,10h138.39c5.523,0,10-4.477,10-10V72.928H69.748V170.071z"></path><path fill="#808285" d="M103.591,107.826H88.943c-2.761,0-5-2.239-5-5V88.179c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C108.591,105.588,106.352,107.826,103.591,107.826z"></path><path fill="#808285" d="M138.708,107.826h-14.647c-2.761,0-5-2.239-5-5V88.179c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C143.708,105.588,141.47,107.826,138.708,107.826z"></path><path fill="#808285" d="M173.826,107.826h-14.647c-2.761,0-5-2.239-5-5V88.179c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C178.826,105.588,176.587,107.826,173.826,107.826z"></path><path fill="#808285" d="M208.943,107.826h-14.647c-2.761,0-5-2.239-5-5V88.179c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C213.943,105.588,211.705,107.826,208.943,107.826z"></path><g><path fill="#808285" d="M103.591,138.198H88.943c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C108.591,135.96,106.352,138.198,103.591,138.198z"></path><path fill="#808285" d="M138.708,138.198h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C143.708,135.96,141.47,138.198,138.708,138.198z"></path><path fill="#808285" d="M173.826,138.198h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C178.826,135.96,176.587,138.198,173.826,138.198z"></path><path fill="#808285" d="M208.943,138.198h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C213.943,135.96,211.705,138.198,208.943,138.198z"></path></g><g><path fill="#808285" d="M103.591,168.57H88.943c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C108.591,166.332,106.352,168.57,103.591,168.57z"></path><path fill="#808285" d="M138.708,168.57h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C143.708,166.332,141.47,168.57,138.708,168.57z"></path><path fill="#808285" d="M173.826,168.57h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C178.826,166.332,176.587,168.57,173.826,168.57z"></path><path fill="#808285" d="M208.943,168.57h-14.647c-2.761,0-5-2.239-5-5v-14.647c0-2.761,2.239-5,5-5h14.647 c2.761,0,5,2.239,5,5v14.647C213.943,166.332,211.705,168.57,208.943,168.57z"></path></g><g><path fill="#D1D3D4" d="M223.138,72.928v92.143c0,5.523-4.477,10-10,10H74.748c-1.466,0-2.855-0.323-4.11-0.89 c1.569,3.471,5.053,5.89,9.11,5.89h138.39c5.523,0,10-4.477,10-10V72.928H223.138z"></path></g><g><path fill="#FFA91A" d="M55.123,72.928V42.395c0-5.523,4.477-10,10-10h167.64c5.523,0,10,4.477,10,10v30.533H55.123z"></path></g><g><path fill="#EF7816" d="M236.873,33.286c0.567,1.255,0.89,2.643,0.89,4.11v25.533c0,2.761-2.239,5-5,5H55.123v5h187.64V42.395 C242.763,38.339,240.344,34.854,236.873,33.286z"></path></g><g><path fill="#E6E7E8" d="M212.88,53.423L212.88,53.423c-5.06,0-9.162-4.102-9.162-9.162V20.529 c0-5.06,4.102-9.162,9.162-9.162h0c5.06,0,9.162,4.102,9.162,9.162v23.732C222.042,49.321,217.94,53.423,212.88,53.423z"></path><path fill="#E6E7E8" d="M170.256,53.423L170.256,53.423c-5.06,0-9.162-4.102-9.162-9.162V20.529 c0-5.06,4.102-9.162,9.162-9.162h0c5.06,0,9.162,4.102,9.162,9.162v23.732C179.418,49.321,175.316,53.423,170.256,53.423z"></path><path fill="#E6E7E8" d="M127.631,53.423L127.631,53.423c-5.06,0-9.162-4.102-9.162-9.162V20.529 c0-5.06,4.102-9.162,9.162-9.162h0c5.06,0,9.162,4.102,9.162,9.162v23.732C136.793,49.321,132.691,53.423,127.631,53.423z"></path><path fill="#E6E7E8" d="M85.006,53.423L85.006,53.423c-5.06,0-9.162-4.102-9.162-9.162V20.529 c0-5.06,4.102-9.162,9.162-9.162h0c5.06,0,9.162,4.102,9.162,9.162v23.732C94.168,49.321,90.066,53.423,85.006,53.423z"></path><path fill="#D1D3D4" d="M88.481,12.054c0.44,1.072,0.687,2.244,0.687,3.475v23.732c0,5.06-4.102,9.162-9.162,9.162 c-1.231,0-2.403-0.247-3.475-0.687c1.369,3.336,4.646,5.687,8.475,5.687c5.06,0,9.162-4.102,9.162-9.162V20.529 C94.168,16.7,91.817,13.424,88.481,12.054z"></path><path fill="#D1D3D4" d="M216.356,12.054c0.44,1.072,0.687,2.244,0.687,3.475v23.732c0,5.06-4.102,9.162-9.162,9.162 c-1.231,0-2.403-0.247-3.475-0.687c1.369,3.336,4.646,5.687,8.475,5.687c5.06,0,9.162-4.102,9.162-9.162V20.529 C222.042,16.7,219.691,13.424,216.356,12.054z"></path><path fill="#D1D3D4" d="M173.731,12.054c0.44,1.072,0.687,2.244,0.687,3.475v23.732c0,5.06-4.102,9.162-9.162,9.162 c-1.231,0-2.403-0.247-3.475-0.687c1.369,3.336,4.646,5.687,8.475,5.687c5.06,0,9.162-4.102,9.162-9.162V20.529 C179.418,16.7,177.067,13.424,173.731,12.054z"></path><path fill="#D1D3D4" d="M131.106,12.054c0.44,1.072,0.687,2.244,0.687,3.475v23.732c0,5.06-4.102,9.162-9.162,9.162 c-1.231,0-2.403-0.247-3.475-0.687c1.369,3.336,4.646,5.687,8.475,5.687c5.06,0,9.162-4.102,9.162-9.162V20.529 C136.793,16.7,134.442,13.424,131.106,12.054z"></path></g><g><circle cx="70.737" cy="187.132" r="57.5" fill="#648940"></circle></g><g><path fill="#5A7A39" d="M108.809,144.06c8.972,10.142,14.427,23.467,14.427,38.073c0,31.756-25.744,57.5-57.5,57.5 c-14.606,0-27.931-5.456-38.073-14.427c10.535,11.91,25.922,19.427,43.073,19.427c31.756,0,57.5-25.744,57.5-57.5 C128.237,169.982,120.719,154.595,108.809,144.06z"></path></g><g><path fill="#D1D3D4" d="M69.022,144.295c-9.691,0.87-16.95,9.317-16.95,19.046l0,19.87h6.722l0-19.977 c0-5.901,4.131-11.186,9.956-12.131c7.46-1.21,13.93,4.544,13.93,11.781v6.327c0,1.105,0.895,2,2,2h2.722c1.105,0,2-0.895,2-2 v-6.327C89.402,152.024,80.083,143.302,69.022,144.295z"></path><path fill="#FFC91D" d="M98.412,217.469c0,3.081-2.498,5.579-5.579,5.579l-44.192,0c-3.081,0-5.579-2.498-5.579-5.579v-28.679 c0-3.081,2.498-5.579,5.579-5.579h44.192c3.081,0,5.579,2.498,5.579,5.579V217.469z"></path><path fill="#FFA91A" d="M93.384,183.238c0.018,0.181,0.028,0.365,0.028,0.551v28.679c0,3.081-2.498,5.579-5.579,5.579H43.64 c-0.186,0-0.37-0.01-0.551-0.028c0.277,2.822,2.656,5.028,5.551,5.028h44.193c3.081,0,5.579-2.498,5.579-5.579v-28.679 C98.412,185.894,96.206,183.515,93.384,183.238z"></path><path fill="#414042" d="M76.433,200.024c0-3.146-2.55-5.697-5.696-5.697s-5.697,2.55-5.697,5.697 c0,2.261,1.321,4.209,3.231,5.129v6.774c0,1.362,1.104,2.465,2.466,2.465s2.466-1.104,2.466-2.465v-6.774 C75.112,204.233,76.433,202.285,76.433,200.024z"></path></g>
</svg>
        

     
       <h1 className=' hidden ml-10 md:block'> <span className=' text-2xl   text-black font-light text-center   '> Flexible Payment </span> </h1> 

         </div>
           {/* <p> Interest Section</p> */}
           <h1 className='md:hidden'> <span className='   text-sm     text-black font-light text-center  '> Flexible Payment </span> </h1> 
  
       

        </div>
        <div className='pt-10'>

<div className='flex justify-center items-center'>
 {/* <img className='mb-4' src={Fixedrate}/> */}
 <img className='w-16 pb-2 md:mb-2 md:pb-0' src="https://img.icons8.com/dotty/80/000000/card-in-use.png"/>
         <h1 className=' hidden ml-10 md:block'> <span className='text-2xl   text-black font-light text-center  '> Pay-Off Option </span> </h1> 
 </div>
   {/* <p> Interest Section</p> */}
   <h1 className='md:hidden'> <span className='    text-sm     text-black font-light text-center   '> Pay-Off Option </span> </h1> 



</div>
        <div className='pt-10'>
           
         <div className='flex justify-center items-center'>
         <svg className='w-14 mb-3  md:mb-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="58" height="58"
viewBox="0 0 464.001 464.001">
<path fill="#ff8c95" d="M464,430.501c0,13.202-10.716,24-24,24c-10.363,0-278.023,0-303,0c-13.25,0-24-10.75-24-24v-212	c0-13.25,10.75-24,24-24h303c13.25,0,24,10.75,24,24C464,222.831,464,426.174,464,430.501z"></path><path fill="#585966" d="M464,258.171v61.32c-246.695,0,156.797,0.01-351,0.01v-61.34	C144.63,258.161,432.381,258.171,464,258.171z"></path><path fill="#42434d" d="M369.78,258.171c0,5.387,0.534,11.874-4.21,19.45c-4.92,7.93-13.71,13.2-23.72,13.2H113v-32.66	C155.134,258.161-7.74,258.171,369.78,258.171z"></path><path fill="#ff6d7a" d="M369.78,194.501v63.67c-377.128,0-214.95-0.01-256.78-0.01v-39.66c0-13.25,10.75-24,24-24H369.78z"></path><path fill="#ff6d7a" d="M464,218.501v212c0,13.2-10.714,24-24,24H137c-13.255,0-24-10.745-24-24	c0-8.357,7.027-15.003,15.37-14.515c133.35,7.805,253.249-65.718,283.797-199.274c2.971-12.989,14.509-22.211,27.833-22.211	C453.255,194.501,464,205.246,464,218.501z"></path><path fill="#585966" d="M464,319.491c0,0.1,1.615,0.01-116.62,0.01C347.48,319.403,346.091,319.491,464,319.491z"></path><path fill="#fff" d="M224,375.501h-56c-4.418,0-8-3.582-8-8s3.582-8,8-8h56c4.418,0,8,3.582,8,8	S228.418,375.501,224,375.501z"></path><path fill="#fff" d="M288,418.501H168c-4.418,0-8-3.582-8-8s3.582-8,8-8h120c4.418,0,8,3.582,8,8	S292.418,418.501,288,418.501z"></path><path fill="#42434d" d="M464,258.171v61.33H363.1c14.56-18.12,26.73-38.61,36.01-61.33H464z"></path><path fill="#ff8c95" d="M351,245.501c0,13.202-10.716,24-24,24c-10.363,0-278.023,0-303,0c-13.25,0-24-10.75-24-24v-212	c0-13.25,10.75-24,24-24h303c13.25,0,24,10.75,24,24C351,37.831,351,241.174,351,245.501z"></path><path fill="#ff6d7a" d="M351,33.501v212c0,13.2-10.714,24-24,24H24c-13.255,0-24-10.745-24-24	c0-8.357,7.027-15.003,15.37-14.515c133.35,7.805,253.249-65.718,283.797-199.274C302.138,18.723,313.676,9.501,327,9.501	C340.255,9.501,351,20.246,351,33.501z"></path><path fill="#585966" d="M464,258.161c0,0.1,1.389,0.01-116.61,0.01C347.29,258.073,345.81,258.161,464,258.161z"></path><path fill="#fff" d="M147,172.501H55c-4.418,0-8-3.582-8-8s3.582-8,8-8h92c4.418,0,8,3.582,8,8	S151.418,172.501,147,172.501z"></path><path fill="#fff" d="M224,172.501h-31c-4.418,0-8-3.582-8-8s3.582-8,8-8h31c4.418,0,8,3.582,8,8	S228.418,172.501,224,172.501z"></path><path fill="#fff" d="M277,172.501h-11c-4.418,0-8-3.582-8-8s3.582-8,8-8h11c4.418,0,8,3.582,8,8	S281.418,172.501,277,172.501z"></path><path fill="#fff" d="M107,228.501H55c-4.418,0-8-3.582-8-8s3.582-8,8-8h52c4.418,0,8,3.582,8,8	S111.418,228.501,107,228.501z"></path><path fill="#fff0a6" d="M110,65.501v39c0,4.418-3.582,8-8,8H63c-4.418,0-8-3.582-8-8v-39c0-4.418,3.582-8,8-8h39	C106.418,57.501,110,61.082,110,65.501z"></path>
</svg>
         <h1 className=' hidden ml-10 md:block'> <span className=' text-2xl   text-black font-light text-center   '> Variable Payments </span> </h1> 

         </div>
         <span className=' text-sm md:hidden     text-black font-light text-center'> Variable payments </span>
        </div>

      </div>
    </div>
  </AutoPlaySwipeableViews>
);

export default Swiper;
