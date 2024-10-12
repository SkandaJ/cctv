import React, { useState, useEffect, useRef } from 'react';

const LiveCameraFeed = () => {
  const [ownerInfo, setOwnerInfo] = useState({
    carNumber: '',  
    isOwner: true,
    ownerProfile: {
      name: 'John Doe',
      flatNumber: 'Flat 302',
      profilePic: 'https://via.placeholder.com/100' 
    }
  });
  
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };
    startVideo();
  }, []);

  return (
    <div style={{background:'#F4F5F6'}}>
      <div style={{ 
  background:'#FFFFFF',
  textAlign:'center', 
  border: '1px solid #FFFFFF', 
  borderRadius: '10px', 
  height:'50px',
  padding:'10px', 
  marginBottom:'10px', 
  marginLeft:'500px', 
  marginRight:'500px', 
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'center' 
}}>
  <h1 >Live Feed Dashboard</h1>
</div>
    <div style={{ background: '#F4F5F6', display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      <div style={{ width: '50%' }}>
      <div style={{ background:'#FFFFFF', textAlign:'center', border: '1px solid #ccc', borderRadius: '10px', height:'50px', marginTop:'2px', padding:'10px', marginBottom:'10px'}}>
        <h2>Live Camera Feed</h2>
        </div>
        <div style={{ background:'#FFFFFF', border: '1px solid #ccc', borderRadius: '10px', padding: '10px', height:'500px'}}>
          <video ref={videoRef} autoPlay muted style={{ width: '100%', height: 'auto' }} />
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <h3>{ownerInfo.carNumber}</h3>
          </div>
        </div>
        <div style={{ background:'#cefad0', textAlign:'center', border: '1px solid #ccc', borderRadius: '10px', height:'70px', marginTop:'20px', padding:'10px'}}>
        <h2 style={{marginTop:'20px'}}>License Plate:</h2>
        </div>
      </div>
      <div style={{ width: '47%' }}>
      <div style={{ background:'#cefad0', textAlign:'center', border: '1px solid #ccc', borderRadius: '10px', height:'50px', marginTop:'2px', padding:'10px', marginBottom:'10px'}}>
        <h2>Owner/Resident</h2>
        </div>
        <div style={{  color:'#707784', background:'#FFFFFF' , border: '1px solid #ccc', borderRadius: '10px', padding: '5px', height:'620px'}}>
          <h2 style={{ marginLeft:'20px' }}>Owner Information</h2>
          <div style={{textAlign: 'center' }}>
            <img style={{ borderRadius:'10px', height:'250px' }}src={`pfp/${'Passport Size photo'}.png`} alt='Profile Pic' />
          </div>
          <div style={{ marginLeft:'20px', padding:'10px'}}>
          <h3>Name:</h3>
            <h3>Flat Number:</h3>
            <h3>License Plat Number:</h3>
            <h3>Car Model:</h3>
            <h3>Phone Number:</h3>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LiveCameraFeed;
