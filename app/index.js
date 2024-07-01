// pages/index.js (or any page with getServerSideProps)
export async function getServerSideProps(context) {
    // Get current local time
    const currentTime = new Date();
  
    return {
      props: {
        currentTime: currentTime.toString(), // Example: "Fri Jul 01 2024 14:30:00 GMT+0530 (India Standard Time)"
      },
    };
  }
  
  // Example usage in your component
  export default function Home({ currentTime }) {
    return (
      <div>
        <p>Current local time: {currentTime}</p>
      </div>
    );
  }
  