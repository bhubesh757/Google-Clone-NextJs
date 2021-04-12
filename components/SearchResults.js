function SearchResults({results}) {
    return (
        <div className='mx-auto w-full pl-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
            <p className='text-gray-500 text-md mb-5'>
                About {results.searchInformation?.formattedTotalResults} results(
                    {results.searchInformation?.formattedSearchTime} seconds
                )
            </p>

            {results.items?.map((result) => {
                <div key = {result.link} className='max-w-xl mb-0'>
                    <div>

                    </div>

                    <p> {result.snippet} </p>
                </div>
            })}
        </div>
    )
}

export default SearchResults
