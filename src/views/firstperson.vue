<template>
	<el-row :gutter="15">
	  <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
	    <el-col :span="12">
	      <el-form-item label="姓名" prop="name">
	        <el-input v-model="formData.name" placeholder="请输入姓名" :maxlength="6" clearable
	          :style="{width: '100%'}"></el-input>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="性别" prop="sex">
	        <el-select v-model="formData.sex" placeholder="请选择性别" clearable :style="{width: '100%'}">
	          <el-option v-for="(item, index) in sexOptions" :key="index" :label="item.label" :value="item.value"
	            :disabled="item.disabled"></el-option>
	        </el-select>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="班级" prop="class">
	        <el-input v-model="formData.class" placeholder="请输入班级" clearable :style="{width: '100%'}"></el-input>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="民族" prop="nation">
	        <el-input v-model="formData.nation" placeholder="请输入民族" clearable prefix-icon='el-icon-platform-eleme'
	          suffix-icon='el-icon-more-outline' :style="{width: '100%'}"></el-input>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="宿舍号" prop="field116">
	        <el-input v-model="formData.field116" placeholder="请输入宿舍号" clearable :style="{width: '100%'}">
	        </el-input>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="手机号" prop="phone">
	        <el-input v-model="formData.phone" placeholder="请输入手机号" :maxlength="12" clearable
	          :style="{width: '100%'}"></el-input>
	      </el-form-item>
	    </el-col>
	    <el-col :span="12">
	      <el-form-item label="入团时间" prop="field127">
	        <el-time-picker v-model="formData.field127" format="HH:mm:ss" value-format="HH:mm:ss"
	          :picker-options='{"selectableRange":"00:00:00-23:59:59"}' :style="{width: '100%'}"
	          placeholder="请选择入团时间" clearable></el-time-picker>
	      </el-form-item>
	    </el-col>
	    <el-col :span="24">
	      <el-form-item size="large">
	        <el-button type="primary" @click="submitForm">提交</el-button>
	        <el-button @click="resetForm">重置</el-button>
	      </el-form-item>
	    </el-col>
	  </el-form>
	</el-row>
</template>

<script>
	export default {
	  components: {},
	  props: [],
	  data() {
	    return {
	      formData: {
	        name: undefined,
	        sex: undefined,
	        class: undefined,
	        nation: undefined,
	        field116: undefined,
	        phone: undefined,
	        field127: "12:13:47",
	      },
	      rules: {
	        name: [{
	          required: true,
	          message: '请输入姓名',
	          trigger: 'blur'
	        }],
	        sex: [{
	          required: true,
	          message: '请选择性别',
	          trigger: 'change'
	        }],
	        class: [{
	          required: true,
	          message: '请输入班级',
	          trigger: 'blur'
	        }],
	        nation: [{
	          required: true,
	          message: '请输入民族',
	          trigger: 'blur'
	        }],
	        field116: [{
	          required: true,
	          message: '请输入宿舍号',
	          trigger: 'blur'
	        }],
	        phone: [{
	          required: true,
	          message: '请输入手机号',
	          trigger: 'blur'
	        }],
	        field127: [{
	          required: true,
	          message: '请选择入团时间',
	          trigger: 'change'
	        }],
	      },
	      sexOptions: [{
	        "label": "男",
	        "value": 1
	      }, {
	        "label": "女",
	        "value": 2
	      }],
	    }
	  },
	  computed: {},
	  watch: {},
	  created() {},
	  mounted() {},
	  methods: {
	    submitForm() {
	      this.$refs['elForm'].validate(valid => {
	        if (!valid) return
	        // TODO 提交表单
	      })
	    },
	    resetForm() {
	      this.$refs['elForm'].resetFields()
	    },
	  }
	}
</script>

<style>
</style>
