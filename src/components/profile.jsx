import styled from "@emotion/styled";

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90
}

const Profile = () => {
    return (
        <>
            <h1>Hedy Lamarr</h1>
            <Img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}
export default Profile

const Img = styled.img`
  border-radius: 50%;
`
