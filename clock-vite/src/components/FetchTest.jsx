const FetchTest = () => {

    async function fetchData() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
        <fetchData/>
        </>
    )
}

export default FetchTest;