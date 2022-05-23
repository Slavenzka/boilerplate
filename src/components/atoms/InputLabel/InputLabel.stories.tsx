import ComponentRenderTemplateStory from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory'
import StoryTemplate from 'stories/StoryTemplate/StoryTemplate'
import InputLabel from 'components/atoms/InputLabel/InputLabel'
import { ListItemProps } from 'stories/ComponentRenderTemplateStory/ComponentRenderTemplateStory.spec'
import { StoriesExportObject } from 'stories/specs/index.spec'

const list: ListItemProps[] = [
  {
    heading: `Label w/o text content`,
    component: (
      <InputLabel>
        <input
          type="text"
          value="some test input content"
          style={{
            width: `100%`
          }}
        />
      </InputLabel>
    ),
    code: (
`
<InputLabel>
  <input
    type="text"
    value="some test input content"
    style={{
      width: \`100%\`
    }}
  />
</InputLabel>
`
    )
  },
  {
    heading: `Label non required`,
    component: (
      <InputLabel
        label="Label text"
      >
        <input
          type="text"
          value="some test input content"
          style={{
            width: `100%`
          }}
        />
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label="Label text"
>
  <input
    type="text"
    value="some test input content"
    style={{
      width: \`100%\`
    }}
  />
</InputLabel>
`
    )
  },
  {
    heading: `Label required`,
    component: (
      <InputLabel
        label="Label text"
        isRequired
      >
        <input
          type="text"
          value="some test input content"
          style={{
            width: `100%`
          }}
        />
      </InputLabel>
    ),
    code: (
`
<InputLabel
  label="Label text"
  isRequired
>
  <input
    type="text"
    value="some test input content"
    style={{
      width: \`100%\`
    }}
  />
</InputLabel>
`
    )
  },
]

export const DEFAULT = () => <ComponentRenderTemplateStory list={list} />

export default {
  title: `Components/Atoms/InputLabel`,
  component: InputLabel,
  decorators: [story => (
    <StoryTemplate
      story={story}
      componentName={`InputLabel`}
      componentDescription={(
        <>
          Renders label that is used typically as a wrapper for for elements as a unified way
          to manage label text styles.
        </>
      )}
      proptypesString={(
`
export enum InputLabelVariants {
  DEFAULT = \`DEFAULT\`,
  DARK = \`DARK\`
}

export interface InputLabelProps {
  /*
  * External class name
  */
  className?: string;
  /*
  * Toggles application of "required" styles
  */
  isRequired?: boolean;
  /*
  * Toggles application of "required" styles
  */
  label?: string | ReactNode;
  /*
  * Toggles style presets
  */
  variant?: InputLabelVariants;
}
`
      )}
    />
  )]
} as StoriesExportObject