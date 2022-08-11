import React, {useState, useEffect} from "react";

export default function Fetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [amount, setAmount] = useState(10)

    const url = 'https://opentdb.com/api.php?amount=' + amount;

    useEffect(() => {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    // console.log(response);
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                // console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error('error fetching data:', error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    if (loading)
        return "loading ...";
    if (error)
        return "ERROR!";

    const numberOfQuestions = event => {
        if (isNaN(event.target.value)) {
            alert("Please enter a number")
        } else {
            setAmount(event.target.value)
        }
    }
    const getQuestions = async () => {
        const res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return data;
    }
    console.log(url)
    return (
        <div className="fetch">
            <form>
                <label htmlFor="amount">Number of questions: </label>
                <input type="text" name="amount" id="amount" onChange={numberOfQuestions} required></input>
                <label htmlFor="subject"> Choose a subject: </label>
                <select name="subject" id="subject">
                    <option value=""></option>
                </select>
                <button type={"submit"} onClick={getQuestions}>Let's play!</button>
            </form>
        </div>
    )
}