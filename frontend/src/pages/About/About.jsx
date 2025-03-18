

const styles = {
  container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
  },
  mainHeading: {
      color: '#222',
      textAlign: 'center',
      fontSize: '28px',
      marginBottom: '10px'
  },
  subHeading: {
      color: '#333',
      textAlign: 'center',
      fontSize: '24px',
      marginBottom: '15px'
  },
  paragraph: {
      color: '#555',
      textAlign: 'justify',
      lineHeight: '1.6',
      marginBottom: '20px'
  },
  button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
      margin: '10px auto',
  },
  linkButton: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'block',
      margin: '10px auto',
      textAlign: 'center',
      textDecoration: 'none'
  }
};

function About() {
  return (
      <div style={styles.container}>
          <h1 style={styles.mainHeading}>About Us</h1>
          <h2 style={styles.subHeading}>Welcome to Referral Network Hub</h2>
          <p style={styles.paragraph}>
              At <strong>ReferralNetworkHub (ReferMe)</strong>, we are redefining the hiring process by leveraging the power of referrals, short interviews, and hiring reels to make recruitment faster, more efficient, and rewarding for everyone involved. Our platform connects job seekers, referrers, and HR teams, creating a seamless and transparent ecosystem where professionals can refer candidates, conduct preliminary assessments, and earn rewards for successful placements. With engaging hiring reels and comprehensive resume displays, we provide recruiters with deeper insights into candidates, ensuring better hiring decisions. By integrating technology with professional networking, <strong>ReferralNetworkHub (ReferMe)</strong> transforms the way companies hire and individuals grow in their careers.
          </p>
          <button style={styles.button}>Get Started</button>
          <a href="https://www.figma.com/design/8QmSNdaw7PdOPMVGnpF9Au/ReferralNetworkHub?node-id=0-1&t=cIZGOMdd1hVSVcvC-1" style={styles.linkButton} target="_blank" rel="noopener noreferrer">
              View Mobile App Design
          </a>
      </div>
  );
}

export default About;
