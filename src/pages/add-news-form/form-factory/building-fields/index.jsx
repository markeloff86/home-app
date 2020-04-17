import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Field, getFormValues } from "redux-form"
import _ from 'lodash'
import classNames from "classnames"

import { Checkbox, RadioGroupMenu, RadioGroup } from '../../../components/form'
import formStyle from '../../../components/form/style.css'
import {
    makeBuildingFlats,
    makeBuildingsList,
    makeBuildingPorches,
    makeNewsPorchesSelectItems,
    makeBuildingFloorCount,
    makeNewsFloorSelectItems,
    makeBuildingPipes,
} from "../../../../__data__/selectors"
import { NEWS_BUILDING_MENU_ITEMS, NEWS_BUILDING_MENU_ITEMS_ID } from "../../../../__data__/constants"
import SelectInput from "../../../components/form/select-input"

function Component(props) {
    const buildingSelectValue = _.get(props, 'formValues.buildingFieldsMenuField')
    const porchesCountValue = _.get(props, 'formValues.porchesCount')
    const floorsCountValue = _.get(props, 'formValues.floorsCount')

    return (
        <div className={formStyle.fieldsSection}>
            <RadioGroupMenu name='buildingFieldsMenuField' items={NEWS_BUILDING_MENU_ITEMS} />
            {buildingSelectValue === NEWS_BUILDING_MENU_ITEMS_ID.apartments &&
            <div className={classNames(formStyle.fieldsSection, formStyle.hasBorder)}>
                <Field
                    name="flatsNumbers"
                    component={SelectInput}
                    type="text"
                    label="Квартира"
                    size="xl"
                    options={props.buildingFlats}
                    placeholder=""
                    required
                    isMulti={true}
                />
            </div>
            }
            {buildingSelectValue === NEWS_BUILDING_MENU_ITEMS_ID.porches &&
            <div>
                <div className={formStyle.fieldsSection}>
                    <div className={formStyle.checkboxGroup}>
                        {_.map(props.buildingPorches, porch => (
                            <Field
                                name={`buildingPorchesFields.${porch.value}`}
                                component={Checkbox}
                                type="checkbox"
                                label={`${porch.label}-й подъезд`}
                                value=''
                                id={`buildingPorchesFields.${porch.value}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={formStyle.fieldsSection}>
                    <RadioGroup
                        name="floorsCount"
                        items={props.newsFloorSelectItems}
                    />
                </div>
                { floorsCountValue === 'some' &&
                    <div className={formStyle.fieldsSection}>
                        <div className={formStyle.checkboxGroup}>
                            {_.map(props.buildingFloorCount, i => (
                                <Field
                                    name={`buildingFloorsFields.${i.value}`}
                                    component={Checkbox}
                                    type="checkbox"
                                    label={i.label}
                                    value=''
                                    id={`buildingFloorsFields.${i.value}`}
                                />
                            ))}
                        </div>
                    </div>
                }
            </div>
            }
            {buildingSelectValue === NEWS_BUILDING_MENU_ITEMS_ID.floors &&
            <div>
                <div className={formStyle.fieldsSection}>
                    <div className={formStyle.checkboxGroup}>
                        {_.map(props.buildingFloorCount, i => (
                            <Field
                                name={`buildingFloorsFields.${i.value}`}
                                component={Checkbox}
                                type="checkbox"
                                label={`${i.label}-й этаж`}
                                value=''
                                id={`buildingFloorsFields.${i.value}`}
                            />
                        ))}
                    </div>
                </div>
                <div className={formStyle.fieldsSection}>
                    <RadioGroup
                        name="porchesCount"
                        items={props.newsPorchesSelectItems}
                    />
                </div>
                { porchesCountValue === 'some' &&
                <div className={formStyle.fieldsSection}>
                    <div className={formStyle.checkboxGroup}>
                        {_.map(props.buildingPorches, porch => (
                            <Field
                                name={`buildingPorchesFields.${porch.value}`}
                                component={Checkbox}
                                type="checkbox"
                                label={`${porch.label}-й подъезд`}
                                value=''
                                id={`buildingPorchesFields.${porch.value}`}
                            />
                        ))}
                    </div>
                </div>
                }
            </div>
            }
            {buildingSelectValue === NEWS_BUILDING_MENU_ITEMS_ID.pipes &&
            <div className={formStyle.fieldsSection}>
                <div className={formStyle.checkboxGroup}>
                    {_.map(props.buildingPipes, i => (
                        <Field
                            name={`buildingPipesFields.${i.value}`}
                            component={Checkbox}
                            type="checkbox"
                            label={i.label}
                            value=''
                            id={i.value}
                        />
                    ))}
                </div>
            </div>
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    buildingsList: makeBuildingsList(),
    formValues: getFormValues('AddNewsForm'),
    buildingFlats: makeBuildingFlats(),
    buildingPorches: makeBuildingPorches(),
    newsPorchesSelectItems: makeNewsPorchesSelectItems(),
    newsFloorSelectItems: makeNewsFloorSelectItems(),
    buildingFloorCount: makeBuildingFloorCount(),
    buildingPipes: makeBuildingPipes(),
})


const withConnect = connect(
    mapStateToProps,

)

export default compose(withConnect)(Component)
