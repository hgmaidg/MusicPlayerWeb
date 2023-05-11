import Media from 'react-media';

function Arrow(pros) {
    return (
        <Media query="(min-width: 600px">
            {(matches) => {
                return (
                    matches && (
                        <span
                            onClick={pros.onClick}
                            className={`arrow ${
                                pros.left ? 'arrow--left' : 'arrow--right'
                            }`}
                        >
                            //arrow icons here
                        </span>
                    )
                )
            }

            }
        </Media>
    )
}

export default Arrow;