
const Ceraficate = ({ certImage, certTitle }) => {

    return (
        <div className="column is-6">
            <figure className="image">
                <img src={certImage} alt={certTitle} />
            </figure>
        </div>

    )
}

export default Ceraficate