import SectionHeader  from '../Section-header/Section-header';
import ServiceCard  from '../Service-card/Service-card';
import TeamIcon from '../../assets/images/icon-team-builder.svg'
import SupervisorIcon from '../../assets/images/icon-supervisor.svg'
import KarmaIcon from '../../assets/images/icon-karma.svg'
import CalcIcon from '../../assets/images/icon-calculator.svg'
import './Section.style.css'

const Section = () => {
    return ( 
    <>
        <SectionHeader />
        <section className='Services-container'>
            <div className='card1'>
                <ServiceCard
                header='Referral based hiring' 
                subheader='Get referral and Do referral for the particular vacancy and get chance of interview' 
                icon={SupervisorIcon}
                borderColor="hsl(180, 62%, 55%)"
                />
            </div>
            <div className='card2'>
                <ServiceCard
                header='Collaborative Platform' 
                subheader='Our platform helps to centralised the interview rounds and daily/weekly meetings in one single platform' 
                icon={TeamIcon}
                borderColor="hsl(0, 78%, 62%)"
                />
            </div>
            <div className='card3'>
                <ServiceCard
                header='Pay per hire' 
                subheader='There is no need to take monthly/yearly subscription, pay only for the usages' 
                icon={CalcIcon}
                borderColor="hsl(212, 86%, 64%)"
                />
            </div>
            <div className='card4'>
                <ServiceCard
                header='Hackathons, Top resumes and Contest' 
                subheader='Collaborative platform for hackathons and Cosing contest. Recruiter can find the "Top resumes"' 
                icon={KarmaIcon}
                borderColor="hsl(34, 97%, 64%)"
                />
            </div>
        </section>
    </>
    );
}

export default Section;