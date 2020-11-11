export type ClassList = {
  class_id: string,
  class_name: string,
  slack_token: string,
  slack_channel: string,
  start_date: string,
  end_date: string,
}

export type StudentList = {
  student_id: string,
  student_number: string,
  student_name: string,
}

export type WorkList = {
  work_id: string,
  work_number: string,
}

export type WorkPost = {
  post_id: number,
  work_number: number,
  work_url: string,
  review: boolean,
  comment: string,
  createdAt: string,
  updatedAt: string,
  student_id: {
    student_id: number,
    student_name: string,
    student_number: number,
    class_id: {
      class_name: string,
      slack_token: string,
      slack_channel: string,
      class_id: number,
      start_date: string,
      end_date: string
    }
  }
}