export function IntroPlate({time}) {
    return (
        <>
        <h1 className="header">Task Management (Todo) List</h1>
        <p className="clock">Time: {time.toLocaleTimeString()} </p>
        <p className="clock">Date: {time.getMonth()} {time.getDate()}, {time.getFullYear()}</p>
        </>
    )
}