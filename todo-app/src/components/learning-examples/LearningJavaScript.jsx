const person = {
    name: 'Sammy',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'UK'
    },
    profiles: ['twitter', 'instagram', 'linkedin'],
    printProfiles: () => {
        person.profiles.map(
            (profile) => console.log(profile)
        )
    }
}

export default function LearningJavaScript()
{
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.printProfiles() }</div>
        </>
    )
}