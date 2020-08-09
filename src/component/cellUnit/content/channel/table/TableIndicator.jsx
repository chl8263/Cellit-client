import React, { useEffect, useState } from "react";

import TableIndicateConponent from "../table/TableIndicateConponent";



const TableIndicator = ( { getCahnnelPostListByWholeUrl, getCahnnelPostListByPageNumber, pageInfo, linkInfo }) => {

    const BUNCH_OF_PAGES_NUMBER = 5;

    const [isFirst, setIsFirst] = useState(false);
    const [firstUrl, setFirstUrl] = useState("aa");

    const [isPrev, setIsPrev] = useState(false);
    const [prevUrl, setPrevUrl] = useState("");

    const [isNext, setIsNext] = useState(false);
    const [nextUrl, setNextUrl] = useState("");

    const [isLast, setIsLast] = useState(false);
    const [lastUrl, setLastUrl] = useState("");

    const [pageNumberList, setPageNumberList] = useState([]);


    useEffect(() => {
        console.log("change");
        if(Object.keys(pageInfo).length > 0 && Object.keys(linkInfo).length > 0){
            console.log(pageInfo);
            console.log(linkInfo);
            if("first" in linkInfo) {
                setIsFirst(true);
                setFirstUrl(linkInfo.first.href);
            }
            if("prev" in linkInfo) {
                setIsPrev(true);
                setPrevUrl(linkInfo.prev.href);
            }
            if("next" in linkInfo) {
                setIsNext(true);
                setNextUrl(linkInfo.next.href);
            }
            if("last" in linkInfo) {
                setIsLast(true);
                setLastUrl(linkInfo.last.href);
            }
            if("number" in pageInfo && "size" in pageInfo && "totalElements" in pageInfo && "totalPages" in pageInfo){
                const currentPage = pageInfo.number;
                const listSize = pageInfo.size;
                const totalElements = pageInfo.totalElements;
                const totalPages = pageInfo.totalPages;

                //const tempBunchOfPages = totalPages/BUNCH_OF_PAGES_NUMBER;
                const tempBunchOfCurrentPage = currentPage/BUNCH_OF_PAGES_NUMBER;
                console.log("====Bunch of pages=======");
                //const bunchOfPages = Math.ceil(tempBunchOfPages);
                const bunchOfCurrentPage = parseInt(tempBunchOfCurrentPage)+1;
                //console.log(bunchOfPages);
                console.log(bunchOfCurrentPage);
                const startPageNumber = ((bunchOfCurrentPage-1) * BUNCH_OF_PAGES_NUMBER)+1;
                let endPageNumber = (bunchOfCurrentPage) * BUNCH_OF_PAGES_NUMBER;
                if(endPageNumber >= totalPages){
                    endPageNumber = totalPages;
                }
                console.log(startPageNumber);
                console.log(endPageNumber);

                const numberList = new Array();
                for(let i = startPageNumber; i <= endPageNumber; i++){
                    var validatedActive;
                    if(currentPage == i-1) validatedActive = true;
                     else validatedActive = false;
                    const pageNumberData = {
                        link: i,
                        name: i,
                        clickFuntion: getCahnnelPostListByPageNumber,
                        isAble: true,
                        isActive: validatedActive,
                    };
                    numberList.push(pageNumberData);
                }
                setPageNumberList(numberList);
                console.log("====Bunch of pages eee =======");
            }
        }
    }, [pageInfo, linkInfo]);

    useEffect(() => {
        pageNumberList.map(x => {
            console.log("********");
            console.log(x);
            console.log(x.isActive);
            console.log("********");
        });
    }, [pageNumberList]);

    const onClickLink = (link) => {
        console.log("~~~~~~~");
        console.log(link);
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <div className="dataTables_info" id="zero_config_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className="dataTables_paginate paging_simple_numbers" id="zero_config_paginate">
                        <ul className="pagination">
                            <TableIndicateConponent link={firstUrl} name="First" clickFuntion={getCahnnelPostListByWholeUrl} isAble={isFirst} isActive={false}/>
                            <TableIndicateConponent link={prevUrl} name="Prev" clickFuntion={getCahnnelPostListByWholeUrl} isAble={isPrev} isActive={false}/>
                            {pageNumberList.map(x => {
                                return <TableIndicateConponent key={x.name} link={x.link} name={x.name} clickFuntion={x.clickFuntion} isAble={true} isActive={x.isActive} />
                            })}
                            <TableIndicateConponent link={nextUrl} name="Next" clickFuntion={getCahnnelPostListByWholeUrl} isAble={isNext} isActive={false}/>
                            <TableIndicateConponent link={lastUrl} name="Last" clickFuntion={getCahnnelPostListByWholeUrl} isAble={isLast} isActive={false}/>
                            {/* {isFirst && 
                            <li className="paginate_button page-item previous" id="zero_config_previous">
                                <a onClick={cc} href="#!" aria-controls="zero_config" data-dt-idx="0" tabIndex="0" className="page-link">First</a>
                            </li>
                            }

                            {!isFirst && 
                            <li className="paginate_button page-item previous disabled" id="zero_config_previous">
                                <a onClick={cc} href="#!" aria-controls="zero_config" data-dt-idx="0" tabIndex="0" className="page-link">First</a>
                            </li>
                            }
                            
                            <li className="paginate_button page-item previous disabled" id="zero_config_previous">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                            </li>
                            <li className="paginate_button page-item active">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="1" tabIndex="0" className="page-link">1</a>
                            </li>
                            <li className="paginate_button page-item ">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="2" tabIndex="0" className="page-link">2</a>
                            </li>
                            <li className="paginate_button page-item ">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="3" tabIndex="0" className="page-link">3</a>
                            </li>
                            <li className="paginate_button page-item ">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="4" tabIndex="0" className="page-link">4</a>
                            </li>
                            <li className="paginate_button page-item ">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="5" tabIndex="0" className="page-link">5</a>
                            </li>
                            <li className="paginate_button page-item next" id="zero_config_next">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="7" tabIndex="0" className="page-link">Next</a>
                            </li>
                            <li className="paginate_button page-item previous disabled" id="zero_config_previous">
                                <a href="#!" aria-controls="zero_config" data-dt-idx="0" tabIndex="0" className="page-link">Last</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableIndicator;