import React from 'react'

import algoliasearch from "algoliasearch";
import { Configure, Hits, InstantSearch, Pagination, SearchBox } from "react-instantsearch-dom";
import { Hit } from "./hitComponent";
import styles from '../../styles/Home.module.css'

const searchClient = algoliasearch(
	"latency",
	"6be0576ff61c053d5f9a3225e2a90f76"
);

export const SearchComponent: React.FC = () => {
	return (
		<>
			<InstantSearch indexName="bestbuy" searchClient={searchClient}>
				<SearchBox />
				<Hits hitComponent={Hit} />
				<Pagination />
				<Configure hitsPerPage={20} />
			</InstantSearch>
		</>
	)
}