import React from 'react'

import { NEWS_BUILDING_SELECT_ITEMS } from '../../../__data__/constants'

import SomeBuildingFields from './some-buildings-fields'

/**
 * @return {null}
 */
function Component(props) {
    switch(props.buildingValue) {
        case NEWS_BUILDING_SELECT_ITEMS.all:
            return null
        case NEWS_BUILDING_SELECT_ITEMS.some:
            return <SomeBuildingFields />
        default:
            return <div>BUILDINGID</div>
    }
}

export default Component