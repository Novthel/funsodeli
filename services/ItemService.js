export async function getItems(){
    const request = await fetch('http://localhost:3000/api/trainings')
    const trainings = await request.json()

    return trainings
}