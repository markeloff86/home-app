import React from 'react'

import { NEWS_BUILDING_SELECT_ITEMS } from '../../../__data__/constants'

import SomeBuildingFields from './some-buildings-fields'
import BuildingFields from './building-fields'

/**
 * @return {null}
 */
function Component(props) {
    if (!props.buildingValue || props.buildingValue === NEWS_BUILDING_SELECT_ITEMS.all) return null
    if (props.buildingValue === NEWS_BUILDING_SELECT_ITEMS.some) return <SomeBuildingFields />
    return <BuildingFields />
}

export default Component
