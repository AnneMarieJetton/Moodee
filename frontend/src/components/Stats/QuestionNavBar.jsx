import '../../styles/QuestionNavBar.css';

const QuestionNavBar = () => {

    return (

        <div className = 'QuestionNavBar'>
            <div className="QuestionNavBarLinks">
                <button className="QuestionNavBarLink">Mood</button>
                <button className="QuestionNavBarLink">Rating</button>
                <button className="QuestionNavBarLink">Change</button>
                <button className="QuestionNavBarLink">Description</button>
            </div>
        </div>
    );
};

export default QuestionNavBar