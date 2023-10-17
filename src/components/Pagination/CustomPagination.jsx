import {Pagination} from "@mui/material";

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0,0)
    }
    return(
        <div className="w-full flex justify-center mt-2 mb-2">
            <Pagination 
            count={numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)}
            color="primary"
            hideNextButton
            hidePrevButton
            />
        </div>
    )
}

export default CustomPagination;