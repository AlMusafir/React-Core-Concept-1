export default function Friend({friend}){

    // console.log(friend)

    if (!friend || !friend.name || !friend.email) {
        return (
            <div>
                <p>Invalid friend data</p>
            </div>
        );
    }


    const { name , email} = friend ;

    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
        </div>
    )
}