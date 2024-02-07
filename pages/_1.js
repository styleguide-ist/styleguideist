import {
  // SunIcon,
  MoonIcon,
  DeviceTabletIcon as TabletIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  ComputerDesktopIcon as DesktopIcon,
  //
} from '@heroicons/react/24/solid'
import {
  SunIcon,
  CpuChipIcon as LaptopIcon,
  // MoonIcon,
  //
} from '@heroicons/react/24/outline'

const defaultStyles = {
  backgroundColor: '#46474c',
  borderColor: '#e7e7ea',
  color: '#e7e7ea',
}

const atomStyles = {
  backgroundColor: '#433c65',
  borderColor: '#f3e8fd',
  color: '#f3e8fd',
  stroke: '#f3e8fd',
}

const moleculeStyles = {
  backgroundColor: '#244d57',
  borderColor: '#d8f8ff',
  color: '#d8f8ff',
}

const organismStyles = {
  backgroundColor: '#622e39',
  borderColor: '#ffe7e7',
  color: '#ffe7e7',
}

const templateStyles = {
  backgroundColor: '#523e1b',
  borderColor: '#fef7e0',
  color: '#fef7e0',
}

const pageStyles = {
  backgroundColor: '#2a4165',
  borderColor: '#e2eeff',
  color: '#e2eeff',
}

const BASE_HEIGHT = 42

const Round = ({ className = '' }) => (
  <div
    className={`border-t border-r border-t absolute bottom-0 left-0 ${className}`}
    style={{
      width: 14,
      height: 14,
      bottom: 14,
      left: 14,
      borderColor: '#e7e7ea',
      borderTopWidth: 1.5,
      borderRightWidth: 1.5,
    }}
  />
)

const RectRound = ({ className }) => {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 border ${className}`}
        style={{
          width: (BASE_HEIGHT / 3) * 2,
          height: (BASE_HEIGHT / 3) * 2,
          borderColor: '#e7e7ea',
          // borderTopWidth: 1.5,
          // borderRightWidth: 1.5,
          // borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundColor: '#46474c',
          width: (BASE_HEIGHT / 3) * 3,
          height: (BASE_HEIGHT / 3) * 1,
          borderTopLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundColor: '#46474c',
          width: (BASE_HEIGHT / 3) * 1,
          height: (BASE_HEIGHT / 3) * 3,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderTopLeftRadius: 4,
        }}
      ></div>
    </>
  )
}

const SpacingRect = ({ type = 'xs' }) => {
  let width
  let height

  if (type === 'xs') {
    width = BASE_HEIGHT * 0.39
    height = BASE_HEIGHT * 0.39
  }
  if (type === 'sm') {
    width = BASE_HEIGHT * 0.46
    height = BASE_HEIGHT * 0.46
  }
  if (type === 'md') {
    width = BASE_HEIGHT * 0.55
    height = BASE_HEIGHT * 0.55
  }
  if (type === 'lg') {
    width = BASE_HEIGHT * 0.69
    height = BASE_HEIGHT * 0.69
  }
  if (type === 'xl') {
    width = BASE_HEIGHT * 0.83
    height = BASE_HEIGHT * 0.83
  }

  return (
    <div
      className={`border`}
      style={{
        width,
        height,

        borderColor: '#e7e7ea',
        opacity: 0.3,
        borderRadius: 3,
      }}
    ></div>
  )
}

const Label = ({ children, style = {} }) => (
  <span
    className="text-sm mb-0.5"
    style={{
      color: '#e7e7ea',
      ...style,
    }}
  >
    {children}
  </span>
)
const ComponentsTable = () => {
  const GRID_WIDTH = (42 + 2) * 5 - 2

  return (
    <div className="w-screen min-h-screen bg-[#202124] p-32 flex overflow-auto">
      <div className="flex flex-col mr-32">
        <Label>Border</Label>
        <div className="flex mb-2.5">
          <Cell>
            <RectRound className="rounded-none" />
          </Cell>
          <Cell>
            <RectRound className="rounded-sm" />
          </Cell>
          <Cell>
            <RectRound className="rounded" />
          </Cell>
          <Cell>
            <RectRound className="rounded-md" />
          </Cell>
          <Cell>
            <RectRound className="rounded-xl" />
          </Cell>
        </div>
        {/*
        <div className="flex">
          <Cell>
            <Round className="rounded-tr-none" />
          </Cell>
          <Cell>
            <Round className="rounded-tr-sm" />
          </Cell>
          <Cell>
            <Round className="rounded-tr" />
          </Cell>
          <Cell>
            <Round className="rounded-tr-md" />
          </Cell>
          <Cell>
            <Round className="rounded-tr-full" />
          </Cell>
        </div>
*/}
        <Label>Spacing</Label>
        <div className="flex mb-2.5">
          <Cell>
            <SpacingRect type="xs" />
          </Cell>
          <Cell>
            <SpacingRect type="sm" />
          </Cell>
          <Cell>
            <SpacingRect type="md" />
          </Cell>
          <Cell>
            <SpacingRect type="lg" />
          </Cell>
          <Cell>
            <SpacingRect type="xl" />
          </Cell>
        </div>

        <Label>Fonts</Label>
        <div className="flex mb-2.5">
          <Cell width={(GRID_WIDTH - 4) / 3}>Heading</Cell>
          <Cell width={(GRID_WIDTH - 4) / 3}>Body</Cell>
          <Cell width={(GRID_WIDTH - 4) / 3}>Interface</Cell>
        </div>
        {/*
        <div className="flex">
          <Cell>
            <SpacingRect type="md" />
          </Cell>
          <Cell>
            <SpacingRect type="md" />
          </Cell>
          <Cell>
            <SpacingRect type="md" />
          </Cell>
          <Cell>
            <SpacingRect type="md" />
          </Cell>
          <Cell>
            <SpacingRect type="md" />
          </Cell>
        </div>
        */}
        <Label>Shadows</Label>
        <div className="flex mb-2.5">
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
        </div>
        <Label>Colors</Label>
        <div className="flex mb-2.5">
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // primary
              background: 'rgb(91, 91, 214)',
            }}
          ></Cell>
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // secondary
              background: 'rgb(35, 175, 208)',
            }}
          ></Cell>
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // bg
              background: 'rgb(32 33 36)',
              border: '1px solid #3c393f',
            }}
          ></Cell>
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // container / card
              background: 'rgb(70 71 76)',
              // border: '1px solid #000',
            }}
          ></Cell>
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // border
              background: 'rgb(60, 57, 63)',
              // border: '1px solid #000',
            }}
          ></Cell>
          <Cell
            width={(GRID_WIDTH - 5 * 2) / 6}
            height={(GRID_WIDTH - 5 * 2) / 6}
            style={{
              // text (base)
              background: 'rgb(181, 178, 188)',
              // border: '1px solid #000',
            }}
          ></Cell>
        </div>
        <div className="flex mt-2">
          <Cell width={(GRID_WIDTH - 6) / 4}>
            {/*
             */}
            <DesktopIcon className="h-4 w-4" />
          </Cell>
          <Cell width={(GRID_WIDTH - 6) / 4}>
            <LaptopIcon className="h-4 w-4" />
          </Cell>
          <Cell width={(GRID_WIDTH - 6) / 4}>
            <TabletIcon className="h-4 w-4" />
          </Cell>
          <Cell width={(GRID_WIDTH - 6) / 4}>
            <PhoneIcon className="h-4 w-4" />
          </Cell>
        </div>
        <div className="flex">
          <Cell width={(GRID_WIDTH - 2) / 2}>
            <SunIcon className="h-4 w-4" />
          </Cell>
          <Cell width={(GRID_WIDTH - 2) / 2}>
            <MoonIcon className="h-4 w-4" />
          </Cell>
        </div>
      </div>
      <div className="flex flex-col">
        <Label style={{ opacity: 0 }}>Components</Label>
        <div className="flex">
          <Cell type="atom">BTN</Cell>
          <Cell type="atom">INPT</Cell>
          <Cell type="atom">SLCT</Cell>
          <Cell type="atom">IMG</Cell>
          <Cell type="atom">AV</Cell>
          <Cell type="atom">H</Cell>
          <Cell type="atom">P</Cell>
          <Cell type="atom">L</Cell>
          <Cell type="atom">CPT</Cell>
          <Cell type="atom">CRD</Cell>
          <Cell type="atom">CNTR</Cell>
        </div>
        <div className="flex">
          <Cell type="molecule">POST</Cell>
          <Cell type="molecule">FRM</Cell>
          <Cell type="molecule">FDI</Cell>
        </div>
        <div className="flex">
          <Cell type="organism">FEED</Cell>
          <Cell type="organism">FRM</Cell>
          <Cell type="organism">BLG</Cell>
        </div>

        <div className="flex">
          <Cell type="template">STK</Cell>
          <Cell type="template">SIDE</Cell>
          <Cell type="template">COL</Cell>
        </div>
        <div className="flex">
          <Cell type="page">HOM</Cell>
          <Cell type="page">ABT</Cell>
          <Cell type="page">CNT</Cell>
          <Cell type="page">PRD</Cell>
          <Cell type="page">BLG</Cell>
          <Cell type="page">LOG</Cell>
          <Cell type="page">REG</Cell>
        </div>
      </div>
    </div>
  )
}

const Cell = ({
  children,
  type = 'default',
  width = 42,
  height = 42,
  style,
}) => (
  <div
    className="text-xs font-medium tracking-wide w-8 h-8 flex items-center justify-center border-transparent mr-[2px] mb-[2px] relative"
    style={{
      ...(type === 'default' && { ...defaultStyles }),
      ...(type === 'atom' && { ...atomStyles }),
      ...(type === 'molecule' && { ...moleculeStyles }),
      ...(type === 'organism' && { ...organismStyles }),
      ...(type === 'template' && { ...templateStyles }),
      ...(type === 'page' && { ...pageStyles }),

      borderRadius: 4,
      width: width || 42,
      height: height || 42,
      fontSize: 13,

      ...style,
    }}
  >
    {children}
  </div>
)

export default ComponentsTable