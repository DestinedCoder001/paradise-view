import getLocations from "@/utils/getLocation";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import validate from "@/utils/paramsValidator";
function BookingBox() {
  interface LocationProp {
    dest_id: string;
    dest_type: string;
    label: string;
    city_name: string;
  }
  interface ParamsProp {
    order_by: string;
    dest_type: string;
    dest_id: string;
    filter_by_currency: string;
    locale: string;
    units: string;
    room_number: string;
    adults_number: string;
    checkin_date: string;
    checkout_date: string;
    [key: string]: string;
  }
  const url = new URL(`${window?.location.href}/hotels`);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [validateError, setvalidateError] = useState<string | null>();
  const [params, setParams] = useState<ParamsProp>({
    order_by: "",
    dest_type: "city",
    dest_id: "",
    filter_by_currency: "USD",
    locale: "en-gb",
    units: "metric",
    room_number: "",
    adults_number: "",
    checkin_date: "",
    checkout_date: "",
  });
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params.dest_id || inputValue.trim().length < 3) {
      const timeoutFunc = setTimeout(() => {
        if (inputValue.trim().length > 0) {
          getLocations(inputValue)
            .then((res) => {
              setResponse(res);
            })
            .catch((error) => {
              error && setError(error);
            });
        }
      }, 2000);
      return () => clearTimeout(timeoutFunc);
    }
  }, [inputValue, params.dest_id]);
  // console.log(response);
  // console.log(error);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function getHotels(params: ParamsProp) {
    for (let x in params) {
      url.searchParams.set(x, params[x]);
    }
    const validateRes: string | boolean = validate(params);
    if (validateRes !== true) {
      setvalidateError(validateRes);
      setTimeout(() => {
        setvalidateError(null);
      }, 1500);
    } else if (validateRes === true) {
      setvalidateError(null);
      router.push(`${url}`);
    }
  }

  // dropdown list
  function List() {
    function listAction(value: string, dest_id: string) {
      setResponse([]);
      setInputValue(value);
      setParams((prev) => ({
        ...prev,
        dest_id,
      }));
    }
    return (
      <div className="bg-white rounded-md absolute p-2 top-[110%] custom-shadow left-0">
        {response
          ?.filter((city: LocationProp) => city.dest_type === "city")
          .map((city: LocationProp, i: number) => {
            return (
              <div
                key={city.dest_id}
                className="p-2 rounded-md cursor-pointer hover:bg-[#f7f7f7]"
                onClick={() => listAction(city.label, city.dest_id)}
              >
                <p key={i} className="text-[0.8rem] whitespace-nowrap ">
                  {city.city_name}
                </p>
                <p
                  key={i + 1}
                  className="text-[0.6rem] font-semibold whitespace-nowrap "
                >
                  {city.label}
                </p>
              </div>
            );
          })}
      </div>
    );
  }
  // end of dropdown list

  return (
    <div className="rounded-[0.6rem] p-4 border border-[#b1b1b1] my-12 md:my-16  mx-[0.8rem] md:mx-[3rem] lg:mx-[5rem]">
      <div className="grid-cols-2 grid md:grid-cols-3 items-start md:items-center place-items-center gap-y-4 lg:flex lg:justify-between">
        <div className="relative">
          <p className="font-[600]">Location</p>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search location"
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
          {response?.length > 0 ? <List /> : null}
        </div>
        <div>
          <p className="font-[600]">Order by</p>
          <select
            className="mt-2 md:-ml-1"
            name="order_by"
            onChange={(e) => handleChange(e)}
            value={params.order_by}
          >
            <option value="">Select</option>
            <option value="popularity">Popularity</option>
            <option value="review_score">Review score</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <p className="font-[600]">No. of rooms</p>
          <input
            type="number"
            min={0}
            name="room_number"
            onChange={(e) => handleChange(e)}
            value={params.rooms}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">No. of adults</p>
          <input
            type="number"
            min={0}
            name="adults_number"
            onChange={(e) => handleChange(e)}
            value={params.adults}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">Check in</p>
          <input
            type="date"
            name="checkin_date"
            onChange={(e) => handleChange(e)}
            value={params.checkin_date}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
        <div>
          <p className="font-[600]">Check out</p>
          <input
            type="date"
            name="checkout_date"
            onChange={(e) => handleChange(e)}
            value={params.checkout_date}
            className="block border-[1.5px] border-[#666] w-[6rem] md:w-[8rem] placeholder:text-[0.8rem] mt-2 p-2 focus:outline-none rounded-md"
          />
        </div>
      </div>
      {validateError ? (
        <p className="mt-3 font-[600] text-[0.8rem] text-red-500 text-center">
          {validateError}
        </p>
      ) : null}
      <div className="flex items-center lg:justify-end justify-center">
        <button
          className="rounded-[0.8rem] text-[0.9rem] py-[0.8rem] px-7 lg:py-4 w-max bg-brown text-white mt-6"
          onClick={() => getHotels(params)}
        >
          Book now
        </button>
      </div>
    </div>
  );
}

export default BookingBox;