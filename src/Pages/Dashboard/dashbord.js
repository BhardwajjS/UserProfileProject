import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import { APICALL } from "../../utils/helpers";
import React, { useState, useEffect } from "react";
import { APIURL } from "../../constants";
import { Favrouites } from "../../components/favrouites";
import { useSelector, useDispatch } from "react-redux";
import searchIcon from "../../Assets/Icons/search.svg";
import { whishlist } from "../../redux/actions/userActions";
import { userData } from "../../redux/actions/userActions";
import CommonModal from "../../components/modal";
import Pagination from "../../components/Pagination";

let toggleVariable = false;
function Dashboard() {
  //for letter by letter search
  const [value, setValue] = useState("");

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(6);

  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const userDetails = useSelector((state) => state?.userData?.userData);

  useEffect(() => {
    fetchPost();
  }, []);
  const isStared = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleCloseConnect = () => setShowConnectWallet(false);

  const fetchPost = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "app-id": "64410c2931ab7a76c5653f1b",
      },
    };
    let response = await APICALL(APIURL, config);
    let arrRes = response.data.data;
    setPosts(arrRes);
    dispatch(userData(arrRes));
  };

  const toggleFunction = (item) => {
    toggleVariable = !toggleVariable;
    dispatch(whishlist({ item: item, toggleVariable: toggleVariable }));
  };

  useEffect(() => {
    if (value !== "") {
      const res = userDetails.filter((item, index) => {
        if (item.firstName.toLocaleLowerCase().startsWith(value)) {
          return item.firstName.toLocaleLowerCase().startsWith(value);
        }
      });
      dispatch(userData(res));
    } else {
      fetchPost();
    }
  }, [value]);

  //pagination
  const lastPostIndex = currentPage * postsPerPage; // 2*8 =16
  const firstPostIndex = lastPostIndex - postsPerPage; //16-8 = 8

  const currentPagePosts = userDetails?.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className="d-flex container">
        <div className="row w-100">
          <div className="d-flex flex-column align-items-center my-3">
            <h2>USER PROFILES</h2>
            <div className="form-group has-search w-50">
              <img className="form-control-feedback p-2" src={searchIcon} />
              <input
                type="text"
                className="form-control"
                placeholder="Search here..."
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="form-group mt-2 w-50">
              <button className="btn btn-success " onClick={() => setShowConnectWallet(true)}>
                <span className="h6">WHISHLIST</span>
              </button>
            </div>
          </div>

          {currentPagePosts?.map((item) => (
            <div className="col-xl-4 col-md-6 mb-4 d-flex flex-column align-items-stretch p-2 key={index}">
              <div className="border border-dark rounded py-2">
                <img src={item.picture} className="h-50 w-50 m-3" />
                <h2 className="text-center my-3">
                  {" "}
                  {item.firstName} {item.lastName}
                </h2>

                <Favrouites
                  toggleFunction={() => toggleFunction(item)}
                  isWhishlisted={item.isWhishlisted}
                />
              </div>
            </div>
          ))}

          <div className="m-3">
            <Pagination
              totalPosts={posts.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <CommonModal
            show={showConnectWallet}
            handleClose={handleCloseConnect}
            userDetails={userDetails}
            className="connect_wallet_modal"
            heading="Connect Wallet"
          >
            {/* <ul>
              <h3>hello</h3>
            </ul> */}
          </CommonModal>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
