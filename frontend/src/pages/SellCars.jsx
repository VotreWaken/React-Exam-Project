import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/SellCarsPage.css';

import { fetchCars } from '../redux/slices/posts';

import axios from '../axios';

const SellCars = () => {

    const dispatchs = useDispatch();
    const { posts } = useSelector(state => state.posts);

    React.useEffect(() => {
        dispatchs(fetchCars())
    }, []);

    const [uploadedImageUrl, setUploadedImageUrl] = useState('');

    const carYears = posts.items.map(post => post.year).filter(year => year);
    const uniqueCarYears = [...new Set(carYears)];

    const carBrands = posts.items.map(post => post.brand).filter(brand => brand);
    const uniqueCarBrands = [...new Set(carBrands)];


    const [selectedYear, setSelectedYear] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };

    const [model, setModel] = useState('');
    const [description, setDescription] = useState('');
    const [exteriorColor, setExteriorColor] = useState('');
    const [price, setPrice] = useState('');

    const handleModelChange = (event) => {
        setModel(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleExteriorColorChange = (event) => {
        setExteriorColor(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const navigate = useNavigate();

    const[drag, setDrag] = useState(false)

    function DragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }

    function DragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }

    const onSubmit = async () => {
        try {

            let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxOGE0OGEzM2NkZTA2YjI5OWFiMmQiLCJpYXQiOjE3MTEzODE5OTgsImV4cCI6MTcxMzk3Mzk5OH0.AbUlzrHqtZF80cO_v9BKvMbRYRvuFcU1UUzBSwriqHs";

            const fields = {
                year: selectedYear, 
                image: uploadedImageUrl,
                // image: "https://res.cloudinary.com/carsxe/image/upload/f_auto,fl_lossy,q_auto/v1569282984/carsxe-api/purple_porsche.png",
                brand: selectedBrand,
                model: model,
                color: exteriorColor,
                price: price,
                description: description,
            }

            const { data } = await axios.post('/posts', fields, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            } )

            navigate('/SearchCars')

        } catch (err) { console.warn('Ошибка при создании объявления', console.log(err))}
    }

    async function OnDropHandler(e) {
        e.preventDefault();
        let files = [...e.dataTransfer.files]
        console.log(files);

        const formData = new FormData();
        formData.append('image', files[0]);

        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxOGE0OGEzM2NkZTA2YjI5OWFiMmQiLCJpYXQiOjE3MTEzODE5OTgsImV4cCI6MTcxMzk3Mzk5OH0.AbUlzrHqtZF80cO_v9BKvMbRYRvuFcU1UUzBSwriqHs";

        const { data } = await axios.post('/upload', formData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Данные ответа:', data);
        setUploadedImageUrl(data.url);
        console.log(data.url);
        // formData.append('userId', 1);
        // axios.post('url', formData, options);

        setDrag(false);
    }

    return (
        <div className='SellCarsWrapper'>
                <h2>Car Details</h2>
    <section class="CarDetails">

        <div class="TitleItem">
            <label>Title</label>
            <input type="text" placeholder="Title"/>
        </div>

        <div class="ConditionItem">
            <label>Condition</label>
            <div class="ConditionCheckBox">
            <input type="checkbox"/>New
            <input type="checkbox"/>Used
        </div>
        </div>

        <div class="BodyTypeItem">
            <label>Body Type</label>
            <select>
                <option value="" disabled selected>Select Option</option>
            </select>
        </div>

        <div class="YearItem">
            <label>Year</label>
            <select value={selectedYear} onChange={handleYearChange}>
                <option value="" disabled>Выберите год</option>
                    {uniqueCarYears.map((year) => (
                        <option key={year} value={year}>{year}</option>
            ))}
            </select>
        </div>

        <div class="BrandItem">
            <label>Brand</label>
            <select value={selectedBrand} onChange={handleBrandChange}>
                <option value="" disabled>Выберите Бренд</option>
                    {uniqueCarBrands.map((brand) => (
                        <option key={brand} value={brand}>{brand}</option>
            ))}
            </select>
        </div>

        <div class="PassangerCapacityItem">
            <label>Passanger Capacity</label>
            <div class="PassangerCapacityInput">
                <button class="MinusBtn">-</button>
                <input type="text" placeholder="Select Option"/>
                <button class="PlusBtn">+</button>
            </div>
        </div>

        <div class="ModelItem">
            <label>Model</label>
            <input type="text" value={model} onChange={handleModelChange} placeholder="Write Car Model"/>
        </div>

        <div class="ExteriorColorItem">
            <label>Exterior Color</label>
            <input type="text" value={exteriorColor} onChange={handleExteriorColorChange} placeholder="Write Exterior Car Color"/>
        </div>

        <div class="DescriptionItem">
            <label>Description</label>
            <input type="text" value={description} onChange={handleDescriptionChange} placeholder="Write description about your car"/>
        </div>

    </section>

    <h2>Engine Details</h2>
    <section class="EngineDetails">

        <div class="FuelTypeItem">
            <label>Fuel Type</label>
            <select>
                <option value="" disabled selected>Select Option</option>
            </select>
        </div>

        <div class="MileageItem">
            <label>Mileage</label>
            <input type="text" placeholder="Select Option"/>
        </div>

        <div class="TransmissioneItem">
            <label>Transmission</label>
            <select>
                <option value="" disabled selected>Select Option</option>
            </select>
        </div>

        <div class="DrivetrainItem">
            <label>Drivetrain</label>
            <select>
                <option value="" disabled selected>Select Option</option>
            </select>
        </div>

        <div class="EngineCapacityItem">
            <label>Engine Capacity</label>
            <div class="EngineCapacityItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>cc</button>
            </div>
        </div>

        <div class="PowerItem">
            <label>Power</label>
            <div class="PowerItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>hp</button>
            </div>
        </div>

    </section>

    <h2>Dimension</h2>
    <section class="DimensionDetails">

        <div class="LengthItem">
            <label>Length</label>
            <div class="LengthItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>mm</button>
            </div>
        </div>

        <div class="WidthItem">
            <label>Width</label>
            <div class="WidthItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>mm</button>
            </div>
        </div>

        <div class="HeightItem">
            <label>Height</label>
            <div class="HeightItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>mm</button>
            </div>
        </div>

        <div class="CargoVolumeItem">
            <label>Cargo Volume</label>
            <div class="CargoVolumeItemInput">
                <input type="text" placeholder="Select Option"/>
                <button>L</button>
            </div>
        </div>

    </section>

    <h2>Features</h2>
    <section class="FeaturesDetails">

        <input type="text" placeholder="Search Here"/>

        <div class="PowerSteeringItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Power Steering</label>
        </div>

        <div class="ACItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>AC</label>
        </div>

        <div class="AlarmItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Alarm</label>
        </div>

        <div class="BluetoothItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Bluetooth</label>
        </div>

        <div class="HeatedSeatsItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Heated Seats</label>
        </div>

        <div class="WifiItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Wifi</label>
        </div>
        
        <div class="CruiseControlItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Cruise Control</label>
        </div>
        
        <div class="FrontParkingSensorItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Front Parking Sensor</label>
        </div>
        
        <div class="RearParkingSensor">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Rear Parking Sensor</label>
        </div>
        
        <div class="RoofRackItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Roof Rack</label>
        </div>
        
        <div class="PowerWindowsItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Power Windows</label>
        </div>
        
        <div class="SunroofItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Sunroof</label>
        </div>

        <div class="USBPortItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>USB Port</label>
        </div>

        <div class="Sound SystemItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Sound System</label>
        </div>

        <div class="MemorySeatItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Memory Seat</label>
        </div>

        <div class="OtherItem">
            <input type="checkbox" placeholder="Select Option"/>
            <label>Other</label>
        </div>

        <input type="text" placeholder="Write Another Feature Here"/>

    </section>

    <h2>Location</h2>
    <section class="LocationDetails">

        <div class="AddressItem">
            <label>Address</label>
            <input type="text" placeholder="Write Address Here"/>
        </div>

        <img src="/img/SellCars/Map.png" alt=""/>

    </section>

    <h2>Price</h2>
    <section class="PriceDetails">
        <div class="FullPriceItem">
            <label>Full Price</label>
            <div class="FullPriceItemInput">
                <button>$</button>
                <input type="text" value={price} onChange={handlePriceChange} placeholder="Price Here"/>
            </div>
        </div>

    </section>

    <h2>Images & Video</h2>
    <section class="MediaDetails">

        <div class="UploadMediaItem">
            <label>Upload your Image / Video</label>
            <div className='SearchWrapper'>
            { drag
                ? <div 
                onDragStart={e => DragStartHandler(e)}
                onDragLeave={e => DragLeaveHandler(e)}
                onDragOver={e => DragStartHandler(e)}
                onDrop={e => OnDropHandler(e)}
                className='drop-area'>Отпустите Файлы Для Загрузки</div>
                : <div className='drop-area-active'
                    onDragStart={e => DragStartHandler(e)}
                    onDragLeave={e => DragLeaveHandler(e)}
                    onDragOver={e => DragStartHandler(e)}
                    >Перенесите Файлы Для Загрузки</div>
            }
        </div>
        </div>

        <div class="LinkMediaItem">
            <label>Link for Video</label>
            <input type="text" placeholder="Link for Video"/>
        </div>


    </section>

    <h2>Vehicle History</h2>
    <section class="VehicleHistoryDetails">

        <div class="VehicleHistoryItem">
            <input type="file" placeholder="Select Option"/>
        </div>

    </section>

    <button onClick={onSubmit} class="SellCarBtn">Sell My Car</button>
        </div>
    );
}

export default SellCars;
