import './heroComponent.css'

const HeroComponnet = () => {
    return (
        <>
            <div className="main-container">
                <div className="container1">
                    <button type='button' className='premium'> Premium Properties</button>
                    <div className='head-line'>
                        <p className="head-text">Discover Your </p>
                        <p className="head-text">Perfecdct Home in </p>
                        <p className="head-text">the Heart of the City</p>
                    </div>

                    <p className="text-contain">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Browse thousands of verified listings from trusted agents.
                    </p>

                    <div className="form-sec">
                        <form action="">
                            <input type="text" placeholder='location' name='location' className='input' />

                            <div className='select-dropdown'>
                                <select id="propertyType" name="propertyType">
                                    <option >Property</option>
                                    <option value="">Select type</option>
                                    <option value="house">House</option>
                                    <option value="apartment">Apartment</option>
                                    <option value="land">Land</option>
                                    <option value="townhouse">Townhouse</option>
                                </select>

                                <select id="Price Range" name="Price Range">
                                    <option >Price Range</option>
                                    <option value="">Select type</option>
                                    <option value="under-$200k">Under $200k</option>
                                    <option value="$200-$300k">$200k - $500k</option>
                                    <option value="$500k-$800k">$500k - $800k</option>
                                    <option value="$800k-$1.4m">$800k - $1.4m</option>
                                    <option value="$1.4m-above">$1.4m above</option>
                                </select>
                                <select id="Bedroom" name="Bedroom">
                                    <option >Bedroom</option>
                                    <option value="">Select type</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                           <button type='submit' className='search-btn'>Search Property</button>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="hero-image" >
                        <img src="/images/home4.jpg" alt="property image" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeroComponnet