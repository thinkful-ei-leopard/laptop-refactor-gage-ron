import React from 'react';
import Feature from './Feature';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

function Customize(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(props.features).map((feature, idx) => {
                     const featureHash = feature + '-' + idx;
                     const options = props.features[feature].map((item, idx)=> {
                        const itemHash = slugify(JSON.stringify(item));
                        return <Feature key={idx} item={item} feature={feature} updateFeature={props.updateFeature} featureHash={featureHash} stateSelected={props.stateSelected} options={options} itemHash={itemHash} USCurrencyFormat={props.USCurrencyFormat} />;
                     })      
                    return (
                        <fieldset className="feature" key={featureHash}>
                        <legend className="feature__name">
                            <h3>{feature}</h3>
                        </legend>
                        {options}
                        </fieldset>
                    );
            })}

        </form>
    );
}

export default Customize;