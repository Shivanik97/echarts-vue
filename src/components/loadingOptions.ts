export const createLoadingOptions = (
  showSpinner: boolean = true,
  showLable: boolean = true,
  size: SpinnerSize = SpinnerSize.Medium
) => {
  return {
    text: showLable ? 'Loading...' : '',
    color: {
      colorStops: [
        {
          offset: 0.50,
          color: '#be0000'
        },
        {
          offset: 1,
          color: '#ffffff'
        }
      ]
    },
    textColor: '#000000',
    fontSize: 16,
    spinnerRadius: setSpinnerRadius(size),
    lineWidth: 5,
    fontWeight: 400,
    fontStyle: 'normal',
    fontFamily: 'ariana pro',
    showSpinner: showSpinner
  }
}

function setSpinnerRadius(size: SpinnerSize): number {
  switch (size) {
    case SpinnerSize.Small: {
      return 20
    }
    case SpinnerSize.Medium: {
      return 24
    }
    case SpinnerSize.Large: {
      return 26
    }

    default: {
      return 24
    }
  }
}

export enum SpinnerSize {
  Small,
  Medium,
  Large
}
