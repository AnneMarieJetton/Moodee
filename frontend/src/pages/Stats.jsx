import NavBar from '../components/Stats/NavBar'
import QuestionNavBar from '../components/Stats/QuestionNavBar'
import SquareGraph from '../components/Stats/SquareGraph'
import BarGraph from '../components/Stats/BarGraph'
import LineGraph from '../components/Stats/LineGraph'
import PieGraph from '../components/Stats/PieGraph'
import WordGraph from '../components/Stats/WordGraph'

import '../styles/Stats.css';

const Stats = () => {

    return (
        <div className = 'Stats'>
            <NavBar />
            <QuestionNavBar />
            <SquareGraph />
            <BarGraph />
            <LineGraph />
            <PieGraph />
            <WordGraph />
        </div>
    );
};

export default Stats