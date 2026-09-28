package core

type VapiError struct {
	IsVapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewVapiError(code string, msg string, ctx *Context) *VapiError {
	return &VapiError{
		IsVapiError: true,
		Sdk:              "Vapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *VapiError) Error() string {
	return e.Msg
}
